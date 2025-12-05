import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import localeJa from '@angular/common/locales/ja';
import { tokenInterceptor } from '../interceptors/token-interceptor';
registerLocaleData(localeFr, 'fr-FR')
registerLocaleData(localeJa, 'ja-JP')

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])), // Utilisation de withFetch fortement recommendée pour le SSR

    { provide: LOCALE_ID, useValue: "fr-FR" }
  ]

};
