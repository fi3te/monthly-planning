import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Subject } from 'rxjs';
import { debounceTime, finalize, switchMap, takeUntil } from 'rxjs/operators';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { InputDialogComponent } from './components/input-dialog/input-dialog.component';
import { SwapEntryBottomSheetComponent, SwapEntryInputData, SwapEntryOutputData } from './components/swap-entry-bottom-sheet/swap-entry-bottom-sheet.component';
import { Config, fromBase64Url } from './models/config';
import { EditMode } from './models/edit-mode';
import { SlotIdentifier } from './models/slot-identifier';
import { GroupStoreService } from './services/group-store/group-store.service';
import { SlotService } from './services/slot/slot.service';

@Component({
  selector: 'mp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild(MatSidenavContent)
  sidenavContent?: MatSidenavContent;

  @ViewChild(MatSidenav)
  sidenav?: MatSidenav;

  SlotIdentifier = SlotIdentifier;

  online = false;
  opened = false;
  editMode = EditMode.READ_ONLY;
  inProgress = false;

  private reload$ = new Subject<SlotIdentifier | null>();
  private destroy$ = new Subject<void>();
  private mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private route: ActivatedRoute,
    private router: Router,
    private matBottomSheet: MatBottomSheet,
    private matDialog: MatDialog,
    private translocoService: TranslocoService,
    private slotService: SlotService,
    public groupStoreService: GroupStoreService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 640px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.reload$.pipe(
      debounceTime(100),
      switchMap((slot) => slot
        ? this.slotService.get$(slot)
        : this.slotService.latest$()),
      takeUntil(this.destroy$)
    ).subscribe((slot) => {
      this.groupStoreService.init(slot);
      this.inProgress = false;
    });

    this.route.fragment
      .subscribe((fragment) => {
        let config: Config | undefined = undefined;
        if (fragment) {
          try {
            config = fromBase64Url(fragment);
          } catch (error) {
            this.router.navigate([]);
          }
        }
        this.online = !!config;
        this.slotService.setConfig(config);
        this.reset();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  isMobile(): boolean {
    return this.mobileQuery.matches;
  }

  save(): void {
    this.inProgress = true;
    this.slotService.put$({
      identifier: this.groupStoreService.slot!,
      groups: this.groupStoreService.groups
    }).pipe(
      takeUntil(this.destroy$),
      finalize(() => this.reset())
    ).subscribe();
  }

  reset(): void {
    this.inProgress = true;
    this.reload$.next(this.groupStoreService.slot);
  }

  drop(event: CdkDragDrop<string[]>) {
    const sourceGroupIndex = this.groupStoreService.idToIndex(event.previousContainer.id);
    const targetGroupIndex = this.groupStoreService.idToIndex(event.container.id);
    if (sourceGroupIndex == null || targetGroupIndex == null) {
      return;
    }
    this.groupStoreService.moveEntry(sourceGroupIndex, event.previousIndex, targetGroupIndex, event.currentIndex);
  }

  addGroupAtBottom(): void {
    this.groupStoreService.addGroupAtBottom();

    setTimeout(() => {
      const scrollingElement = this.sidenavContent?.getElementRef().nativeElement;
      if (scrollingElement) {
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }
    });
  }

  swapEntry(groupIndex: number, entryIndex: number): void {
    const ref = this.matBottomSheet.open<SwapEntryBottomSheetComponent, SwapEntryInputData, SwapEntryOutputData>(SwapEntryBottomSheetComponent, {
      data: {
        groupIndex,
        entryIndex,
        groups: this.groupStoreService.groups
      }
    });
    ref.afterDismissed()
      .subscribe((output) => {
        if (output) {
          this.groupStoreService.swapEntry(groupIndex, entryIndex, output.groupIndex, output.entryIndex);
        }
      });
  }

  removePerson(groupIndex: number, entryIndex: number): void {
    const dialogRef = this.matDialog.open(ConfirmationDialogComponent, {
      data: {
        title: this.translocoService.translate("common.confirmRemoval", { name: this.groupStoreService.getEntry(groupIndex, entryIndex) }),
        cancel: this.translocoService.translate("common.cancel"),
        confirm: this.translocoService.translate("common.remove"),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.groupStoreService.removeEntry(groupIndex, entryIndex);
      }
    });
  }

  addPerson(groupIndex: number): void {
    const dialogRef = this.matDialog.open(InputDialogComponent, {
      data: {
        title: this.translocoService.translate("common.addPerson"),
        inputLabel: this.translocoService.translate("common.name"),
        cancel: this.translocoService.translate("common.cancel"),
        confirm: this.translocoService.translate("common.add"),
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupStoreService.addEntry(groupIndex, result);
      }
    });
  }

  isPlanning(): boolean {
    return this.editMode === EditMode.PLANNING;
  }

  isUserManagement(): boolean {
    return this.editMode === EditMode.PERSON_MANAGEMENT;
  }

  isMonthManagement(): boolean {
    return this.editMode === EditMode.MONTH_MANAGEMENT;
  }

  loadSlot(slotToggle: MatButtonToggleChange): void {
    if (this.isMobile()) {
      this.sidenav?.close();
    }
    this.reload$.next(slotToggle.value);
  }
}
