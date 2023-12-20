/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-container-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './container-card.component.html',
    styleUrls: ['./container-card.component.scss'],
})
export class ContainerCardComponent {
    @Input() title: string;

    constructor() {
        this.title = 'Untitled';
    }
}
