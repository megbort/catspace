import { Provider } from '@angular/core';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const SUPPORTED_LANGUAGES = ['en', 'fr'];

export const defaultTranslateProviders: Provider[] = provideTranslateService({
  fallbackLang: 'en',
  loader: provideTranslateHttpLoader({
    prefix: 'assets/i18n/',
    suffix: '.json',
  }),
});

export const storybookTranslateProviders: Provider[] = provideTranslateService({
  fallbackLang: 'en',
  loader: provideTranslateHttpLoader({ prefix: './i18n/', suffix: '.json' }),
});
