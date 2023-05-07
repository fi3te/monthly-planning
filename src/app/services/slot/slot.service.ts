import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction, catchError, of } from 'rxjs';
import { Config } from '../../models/config';
import { createMonthYear, nextMonthYear } from '../../models/month-year';
import { Slot, deepCopy } from '../../models/slot';
import { SlotIdentifier } from '../../models/slot-identifier';
import { stringToBase64 } from '../../util/base64';

class DemoSlotService {

  private slotA: Slot;
  private slotB: Slot;

  constructor() {
    this.slotA = {
      identifier: SlotIdentifier.A,
      groups: [
        {
          date: createMonthYear(new Date()),
          entries: ["Hänsel"]
        },
        {
          date: nextMonthYear(createMonthYear(new Date())),
          entries: ["Gretel"]
        }
      ]
    };
    this.slotB = {
      identifier: SlotIdentifier.B,
      groups: []
    };
  }

  get$(slot: SlotIdentifier): Observable<Slot> {
    return of(slot === SlotIdentifier.A ? deepCopy(this.slotA) : deepCopy(this.slotB));
  };

  latest$(): Observable<Slot> {
    return of(
      deepCopy(this.slotA)
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
}

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  private config?: Config;
  private demo: DemoSlotService;

  constructor(private httpClient: HttpClient) {
    this.demo = new DemoSlotService();
  }

  setConfig(config?: Config): void {
    this.config = config;
  }

  get$(slot: SlotIdentifier): Observable<Slot> {
    if (!this.config) {
      return this.demo.get$(slot);
    }

    return this.httpClient
      .get<Slot>(this.config.url, this.prepareOptions(this.config, slot))
      .pipe(
        this.catch404UseEmptySlot(slot)
      );
  };

  latest$(): Observable<Slot> {
    if (!this.config) {
      return this.demo.latest$();
    }

    return this.httpClient
      .get<Slot>(this.config.url, this.prepareOptions(this.config))
      .pipe(
        this.catch404UseEmptySlot(SlotIdentifier.A)
      );
  }

  put$(slot: Slot): Observable<void> {
    if (!this.config) {
      return this.demo.put$(slot);
    }
    return this.httpClient
      .put<void>(this.config.url, slot, this.prepareOptions(this.config, slot.identifier));
  }

  private catch404UseEmptySlot(slot: SlotIdentifier): OperatorFunction<Slot, Slot> {
    return catchError((error: HttpErrorResponse) => {
      if (error.status == HttpStatusCode.NotFound) {
        return of({
          identifier: slot,
          groups: []
        });
      }
      throw error;
    })
  }

  private prepareOptions(config: Config, slot?: SlotIdentifier) {
    let options = {
      headers: new HttpHeaders({
        "Authorization": "Basic " + stringToBase64(config.authUsername + ':' + config.authPassword)
      })
    };
    if (!slot) {
      return options;
    }
    return {
      ...options,
      params: {
        "slot": slot
      }
    }
  }
}
