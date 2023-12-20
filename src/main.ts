/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            HttpClientJsonpModule
        ),
    ],
}).catch(err => console.error(err));
