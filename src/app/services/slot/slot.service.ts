import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { createMonthYear, nextMonthYear, previousMonthYear } from '../../models/month-year';
import { Slot } from '../../models/slot';
import { SlotIdentifier } from '../../models/slot-identifier';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  private slotA: Slot;
  private slotB: Slot;

  constructor() {
    this.slotA = {
      identifier: SlotIdentifier.A,
      groups: [
        {
          date: previousMonthYear(createMonthYear(new Date())),
          entries: [{ name: "Cinderella" }]
        },
        {
          date: createMonthYear(new Date()),
          entries: [{ name: "Hänsel" }, { name: "Gretel" }]
        },
        {
          date: nextMonthYear(createMonthYear(new Date())),
          entries: [{ name: "Schneewittchen" }]
        }
      ]
    };
    this.slotB = {
      identifier: SlotIdentifier.B,
      groups: [
        {
          date: previousMonthYear(createMonthYear(new Date())),
          entries: [{ name: "Ash" }]
        },
        {
          date: createMonthYear(new Date()),
          entries: [{ name: "Misty" }]
        },
        {
          date: nextMonthYear(createMonthYear(new Date())),
          entries: [{ name: "Rocko" }]
        }
      ]
    };
  }

  get$(slot: SlotIdentifier): Observable<Slot> {
    return of(slot === SlotIdentifier.A ? this.copy(this.slotA) : this.copy(this.slotB));
  };

  latest$(): Observable<Slot> {
    return of(
      this.copy(this.slotA)
    );
  }

  put$(slot: Slot): Observable<void> {
    if (slot.identifier === SlotIdentifier.A) {
      this.slotA = slot;
    } else {
      this.slotB = slot;
    }
    return of();
  }

  private copy(slot: Slot): Slot {
    return {
      identifier: slot.identifier,
      groups: [...slot.groups.map(group => ({
        date: group.date,
        entries: [...group.entries.map(entry => ({ name: entry.name }))]
      }))]
    };
  }
}
