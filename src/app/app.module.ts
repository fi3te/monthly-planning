import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { EditModeSelectionComponent } from './components/edit-mode-selection/edit-mode-selection.component';
import { InputDialogComponent } from './components/input-dialog/input-dialog.component';
import { SwapEntryBottomSheetComponent } from './components/swap-entry-bottom-sheet/swap-entry-bottom-sheet.component';
import { MonthYearPipe } from './pipes/month-year/month-year.pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppTranslocoModule } from './app-transloco.module';
import { MatChipsModule } from '@angular/material/chips';
import { OfflineChipComponent } from './components/offline-chip/offline-chip.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    EditModeSelectionComponent,
    SwapEntryBottomSheetComponent,
    MonthYearPipe,
    ConfirmationDialogComponent,
    InputDialogComponent,
    OfflineChipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatExpansionModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AppTranslocoModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        disableClose: true,
        width: "90vw",
        maxWidth: "480px"
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
