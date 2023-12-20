/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import dayjs from 'dayjs';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    getCurrentYear(): number {
        return dayjs().year();
    }
}
