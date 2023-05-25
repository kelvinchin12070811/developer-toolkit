import { ApplicationConfig } from '@angular/core';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), AppRoutingModule],
};
