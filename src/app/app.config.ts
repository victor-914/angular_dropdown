import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { menuReducer } from '../store/menu/menu.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      HttpClientModule,
    ),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideStore(),
    provideState({ name: 'isOpen', reducer: menuReducer }),
  ],
};
