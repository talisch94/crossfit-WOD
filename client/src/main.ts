import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
        ...(appConfig.providers || []),
        provideRouter(routeConfig),
        provideProtractorTestingSupport()
    ]
});
