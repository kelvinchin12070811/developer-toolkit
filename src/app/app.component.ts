/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { ConfigService } from './services/config.service';
import { FooterComponent } from './common/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, RouterModule, SidebarComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {
    titleService = inject(Title);
    configService = inject(ConfigService);

    title = 'developer-toolkit';

    constructor() {
        this.titleService.setTitle('Developer Toolkit');
    }

    ngOnInit() {
        this.configService.setTheme();
    }
}
