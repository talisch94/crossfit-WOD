import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './store/auth.reducer';
import { wodsReducer } from './store/wods.reducer';
import { WodsEffects } from './store/wods.effects';

import routeConfig from './routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routeConfig),
        provideClientHydration(withEventReplay()),
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
        provideStore({ auth: authReducer, wods: wodsReducer }),
        provideEffects([WodsEffects]),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ]
};
