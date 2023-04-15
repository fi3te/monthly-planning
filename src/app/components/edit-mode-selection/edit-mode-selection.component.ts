import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EditMode } from '../../models/edit-mode';

@Component({
  selector: 'mp-edit-mode-selection',
  templateUrl: './edit-mode-selection.component.html',
  styleUrls: ['./edit-mode-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModeSelectionComponent {
  readonly EditMode = EditMode;

  @Input()
  value?: EditMode;

  @Output()
  valueChange = new EventEmitter<EditMode>();
}
