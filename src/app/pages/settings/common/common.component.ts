/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';

@Component({
    selector: 'app-common',
    standalone: true,
    imports: [CommonModule, FormsModule, ContainerCardComponent],
    templateUrl: './common.component.html',
    styleUrls: ['./common.component.scss'],
})
export class CommonComponent {
    configService = inject(ConfigService);
    platformID = inject(PLATFORM_ID);

    theme = signal<string>('');

    ngOnInit() {
        if (isPlatformBrowser(this.platformID)) {
            this.theme.set(localStorage?.getItem('theme') ?? this.configService.getDefaultTheme());
        }
    }

    onThemeChanged() {
        this.configService.setThemeToLocalStorage(this.theme());
        this.configService.setTheme();
    }
}
