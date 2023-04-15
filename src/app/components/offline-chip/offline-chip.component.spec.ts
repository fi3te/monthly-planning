import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { getTranslocoTestingModule } from '../../transloco-testing';
import { OfflineChipComponent } from './offline-chip.component';

describe('OfflineChipComponent', () => {
  let component: OfflineChipComponent;
  let fixture: ComponentFixture<OfflineChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoTestingModule(),
        MatIconModule,
        MatChipsModule
      ],
      declarations: [OfflineChipComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OfflineChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
