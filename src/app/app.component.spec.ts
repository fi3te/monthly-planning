import { MediaMatcher } from '@angular/cdk/layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { getTranslocoTestingModule } from './transloco-testing';

describe('AppComponent', () => {

  const mediaMatcherMock = {
    matchMedia: jest.fn()
  };
  mediaMatcherMock.matchMedia.mockReturnValue({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoTestingModule(),
        MatToolbarModule,
        MatSidenavModule,
        MatButtonToggleModule,
        NoopAnimationsModule,
        MatIconModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: MediaMatcher,
          useValue: mediaMatcherMock
        },
        {
          provide: ActivatedRoute,
          useValue: {}
        },
        {
          provide: MatBottomSheet,
          useValue: {}
        },
        {
          provide: MatDialog,
          useValue: {}
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
