/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'li[app-menu-item]',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
    @Input()
    public label = '';
    @Input()
    public icon?: string;
    @Input()
    public link = '';
    @Input()
    public linkExactMatch = false;
}
