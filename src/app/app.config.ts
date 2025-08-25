import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  provideTransloco,
  TranslocoLoader,
  Translation,
  translocoConfig,
} from '@jsverse/transloco';
import { provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';

import { routes } from './app.routes';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslocoPersistLang({ storage: { useValue: localStorage } }),
    provideTransloco({
      config: translocoConfig({
        availableLangs: ['en-ca', 'fr-ca'],
        defaultLang: 'en-ca',
        reRenderOnLangChange: true,
        prodMode: true,
      }),
      loader: TranslocoHttpLoader,
    }),
  ],
};
