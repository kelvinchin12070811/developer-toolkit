/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    platformID = inject(PLATFORM_ID);

    getThemeFromLocalStorage() {
        if (!isPlatformBrowser(this.platformID)) return '';

        return localStorage.getItem('theme') ?? this.getDefaultTheme();
    }

    getDefaultTheme() {
        if (!isPlatformBrowser(this.platformID)) return '';

        return document.querySelector('html')?.getAttribute('data-theme') ?? 'dark';
    }

    setThemeToLocalStorage(theme: string) {
        if (!isPlatformBrowser(this.platformID)) return;

        localStorage.setItem('theme', theme);
    }

    setTheme() {
        if (!isPlatformBrowser(this.platformID)) return;

        const theme = this.getThemeFromLocalStorage();
        const html = document.querySelector('html');
        html?.setAttribute('data-theme', theme);
    }
}
