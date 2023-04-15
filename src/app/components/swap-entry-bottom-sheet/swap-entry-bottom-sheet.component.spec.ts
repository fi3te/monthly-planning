import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { getTranslocoTestingModule } from '../../transloco-testing';
import { SwapEntryBottomSheetComponent } from './swap-entry-bottom-sheet.component';

describe('SwapEntryBottomSheetComponent', () => {
  let component: SwapEntryBottomSheetComponent;
  let fixture: ComponentFixture<SwapEntryBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoTestingModule(),
        MatListModule
      ],
      declarations: [SwapEntryBottomSheetComponent],
      providers: [
        { provide: MatBottomSheetRef, useValue: {} },
        {
          provide: MAT_BOTTOM_SHEET_DATA, useValue: {
            groupIndex: 0,
            entryIndex: 0,
            groups: []
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SwapEntryBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
