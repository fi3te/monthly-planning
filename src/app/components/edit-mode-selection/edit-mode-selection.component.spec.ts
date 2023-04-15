import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { getTranslocoTestingModule } from '../../transloco-testing';
import { EditModeSelectionComponent } from './edit-mode-selection.component';

describe('EditModeSelectionComponent', () => {
  let component: EditModeSelectionComponent;
  let fixture: ComponentFixture<EditModeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoTestingModule(),
        MatButtonToggleModule,
        MatIconModule,
        MatTooltipModule
      ],
      declarations: [EditModeSelectionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditModeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
