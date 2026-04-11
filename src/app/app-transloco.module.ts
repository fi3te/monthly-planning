import { HttpClient } from '@angular/common/http';
import {
  provideTransloco,
  Translation,
  TranslocoLoader,
  TranslocoModule,
} from '@jsverse/transloco';
import { Injectable, isDevMode, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

export const AVAILABLE_LANGS = ['en', 'de'];
export const DEFAULT_LANG = 'en';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(environment.baseHref + `/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [ TranslocoModule ],
  providers: [
    ...provideTransloco({
      config: {
        availableLangs: AVAILABLE_LANGS,
        defaultLang: DEFAULT_LANG,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class AppTranslocoModule {}
