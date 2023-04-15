import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Group } from '../../models/group';

export interface SwapEntryInputData {
  groupIndex: number;
  entryIndex: number;
  groups: Group[];
}

export interface SwapEntryOutputData {
  groupIndex: number;
  entryIndex: number;
}

@Component({
  selector: 'mp-swap-entry-bottom-sheet',
  templateUrl: './swap-entry-bottom-sheet.component.html',
  styleUrls: ['./swap-entry-bottom-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapEntryBottomSheetComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<SwapEntryBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: SwapEntryInputData) {
  }

  isSource(groupIndex: number, entryIndex: number): boolean {
    return groupIndex === this.data.groupIndex && entryIndex === this.data.entryIndex;
  }

  dismiss(groupIndex: number, entryIndex: number): void {
    this.bottomSheetRef.dismiss(
      {
        groupIndex,
        entryIndex
      }
    );
  }
}
