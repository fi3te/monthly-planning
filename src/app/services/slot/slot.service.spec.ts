import { TestBed } from '@angular/core/testing';

import { SlotService } from './slot.service';
import { HttpClient } from '@angular/common/http';

describe('SlotService', () => {
  let service: SlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {}
        },
      ],
    });
    service = TestBed.inject(SlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
