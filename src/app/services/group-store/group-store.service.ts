import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Entry } from '../../models/entry';
import { Group, groupId } from '../../models/group';
import { createMonthYear, nextMonthYear, previousMonthYear } from '../../models/month-year';
import { SlotIdentifier } from '../../models/slot-identifier';
import { Slot } from '../../models/slot';

@Injectable({
  providedIn: 'root'
})
export class GroupStoreService {

  private readonly _groups$ = new BehaviorSubject<Group[]>([]);
  private readonly _slot$ = new BehaviorSubject<SlotIdentifier | null>(null);
  private readonly _dirty$ = new BehaviorSubject<boolean>(false);

  readonly groups$ = this._groups$.asObservable();

  readonly ids$ = this.groups$.pipe(
    map((groups) => groups.map(group => groupId(group)))
  );

  readonly slot$ = this._slot$.asObservable();

  readonly dirty$ = this._dirty$.asObservable();

  get groups(): Group[] {
    return this._groups$.getValue();
  }

  private set groups(value: Group[]) {
    this._groups$.next(value);
    this._dirty$.next(true);
  }

  get slot(): SlotIdentifier | null {
    return this._slot$.getValue();
  }

  private set slot(slot: SlotIdentifier | null) {
    this._slot$.next(slot);
    this._dirty$.next(true);
  }

  init(slot: Slot): void {
    this._groups$.next(slot.groups);
    this._slot$.next(slot.identifier);
    this._dirty$.next(false);
  }

  addGroupAtTop(): void {
    const firstGroup = this.firstGroup();
    const date = firstGroup ? previousMonthYear(firstGroup.date) : createMonthYear(new Date());
    this.groups = [
      {
        date,
        entries: []
      },
      ...this.groups,
    ];
  }

  addGroupAtBottom(): void {
    const lastGroup = this.lastGroup();
    const date = lastGroup ? nextMonthYear(lastGroup.date) : createMonthYear(new Date());
    this.groups = [
      ...this.groups,
      {
        date,
        entries: []
      }
    ];
  }

  removeGroupAtTop(): void {
    if (this.groups.length < 2) {
      return;
    }
    const firstGroup = this.groups[0];
    const secondGroup = this.groups[1];
    secondGroup.entries = [
      ...firstGroup.entries,
      ...secondGroup.entries,
    ];
    this.groups.splice(0, 1);
    this.groups = [...this.groups];
  }

  removeGroupAtBottom(): void {
    if (this.groups.length < 2) {
      return;
    }
    const forelastGroup = this.groups[this.groups.length - 2];
    const lastGroup = this.groups[this.groups.length - 1];
    forelastGroup.entries = [
      ...forelastGroup.entries,
      ...lastGroup.entries
    ];
    this.groups.splice(this.groups.length - 1, 1);
    this.groups = [...this.groups];
  }

  removeUnnecessaryGroups(): void {
    this.groups = this.groups.filter(group => group.entries && group.entries.length > 0);
    if (this.groups.length === 0) {
      this.addGroupAtBottom();
    }
  }

  removeEntry(groupIndex: number, entryIndex: number): void {
    if (!this.validEntryIndex(groupIndex, entryIndex)) {
      return;
    }
    const group = this.groups[groupIndex];
    group.entries.splice(entryIndex, 1);
    this.groups = [...this.groups];
  }

  addEntry(groupIndex: number, entry: Entry): void {
    if (!this.validGroupIndex(groupIndex)) {
      return;
    }
    const group = this.groups[groupIndex];
    group.entries.push(entry);
    this.groups = [...this.groups];
  }

  swapEntry(
    sourceGroupIndex: number,
    sourceEntryIndex: number,
    targetGroupIndex: number,
    targetEntryIndex: number
  ): void {
    if (!this.validEntryIndex(sourceGroupIndex, sourceEntryIndex) || !this.validEntryIndex(targetGroupIndex, targetEntryIndex)) {
      return;
    }
    const sourceGroup = this.groups[sourceGroupIndex];
    const targetGroup = this.groups[targetGroupIndex];
    const oldTargetEntry = targetGroup.entries[targetEntryIndex];
    targetGroup.entries[targetEntryIndex] = sourceGroup.entries[sourceEntryIndex];
    sourceGroup.entries[sourceEntryIndex] = oldTargetEntry;
    this.groups = [...this.groups];
  }

  moveEntry(
    sourceGroupIndex: number,
    sourceEntryIndex: number,
    targetGroupIndex: number,
    targetEntryIndex: number
  ): void {
    if (!this.validEntryIndex(sourceGroupIndex, sourceEntryIndex) || !this.validGroupIndex(targetGroupIndex)) {
      return;
    }
    const sourceGroup = this.groups[sourceGroupIndex];
    const sourceEntry = sourceGroup.entries[sourceEntryIndex];
    sourceGroup.entries.splice(sourceEntryIndex, 1);

    const targetGroup = this.groups[targetGroupIndex];
    targetGroup.entries.splice(targetEntryIndex, 0, sourceEntry);

    this.groups = [...this.groups];
  }

  indexToId(groupIndex: number): string | null {
    if (!this.validGroupIndex(groupIndex)) {
      return null;
    } else {
      return groupId(this.groups[groupIndex]);
    }
  }

  idToIndex(groupId: string): number | null {
    const index = this.groups.map((_, groupIndex) => this.indexToId(groupIndex)).indexOf(groupId);
    return index >= 0 ? index : null;
  }

  getEntry(groupIndex: number, entryIndex: number): Entry | null {
    return this.validEntryIndex(groupIndex, entryIndex) ? this.groups[groupIndex].entries[entryIndex] : null;
  }

  private validEntryIndex(groupIndex: number, entryIndex: number): boolean {
    return this.validGroupIndex(groupIndex)
      && entryIndex >= 0
      && entryIndex < this.groups[groupIndex].entries.length;
  }

  private validGroupIndex(groupIndex: number): boolean {
    return groupIndex >= 0
      && groupIndex < this.groups.length;
  }

  private firstGroup(): Group | null {
    return this.groups.length > 0 ? this.groups[0] : null;
  }

  private lastGroup(): Group | null {
    return this.groups.length > 0 ? this.groups[this.groups.length - 1] : null;
  }
}
