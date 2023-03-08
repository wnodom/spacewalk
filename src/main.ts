import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withPreloading, TitleStrategy } from '@angular/router';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { SpacewalkPreloadingStrategy } from './app/spacewalk-preloading-strategy.service';
import { SpacewalkTitleStrategy } from './app/spacewalk-title-strategy.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
    provideRouter(
      APP_ROUTES,
      withPreloading(SpacewalkPreloadingStrategy)
    ),
    { provide: TitleStrategy, useClass: SpacewalkTitleStrategy },
  ]
})
  .catch(err => console.error(err));
