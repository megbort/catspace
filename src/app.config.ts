import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { TranslateService } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import {
  defaultTranslateProviders,
  SUPPORTED_LANGUAGES,
} from './app/shared/config/translate';
import { GlobalStore } from './app/shared';

function initializeLanguage(translate: TranslateService) {
  return () => {
    const browserLang = navigator.language?.split('-')[0] ?? 'en';
    const lang = SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : 'en';
    translate.addLangs(SUPPORTED_LANGUAGES);
    return translate.use(lang);
  };
}

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingConfig = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingConfig),
    provideHttpClient(),
    defaultTranslateProviders,
    provideAppInitializer(() => initializeLanguage(inject(TranslateService))()),
    GlobalStore,
  ],
};
