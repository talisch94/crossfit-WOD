import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RootComponent } from './app/root.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes';

bootstrapApplication(RootComponent, {
    ...appConfig,
    providers: [
        ...(appConfig.providers || []),
        provideRouter(routeConfig),
        provideProtractorTestingSupport()
    ]
});
