import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTransloco, TranslocoLoader } from '@ngneat/transloco';

import { routes } from './app.routes';

export class TranslocoJsonLoader implements TranslocoLoader {
  getTranslation(lang: string) {
    return import(`../assets/i18n/${lang}.json`).then((m) => m.default);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideTransloco({
      config: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
      },
      loader: TranslocoJsonLoader,
    }),
  ],
};
