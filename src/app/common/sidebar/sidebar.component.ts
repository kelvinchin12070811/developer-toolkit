/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';

type MenuItem = {
    label: string;
    link: string;
    icon?: string;
};

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, MenuItemComponent],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    public generators = signal<MenuItem[]>([
        {
            label: 'UUID',
            link: 'uuid',
            icon: 'label_important',
        },
        {
            label: 'UUIDv7',
            link: 'uuidv7',
            icon: 'label_important',
        },
        {
            label: 'Timestamp',
            icon: 'alarm',
            link: 'timestamp',
        },
        {
            label: 'Character',
            link: 'char',
            icon: 'abc',
        },
        {
            label: 'Lorem Ipsum',
            link: 'lorem-ipsum',
            icon: 'segment',
        },
        {
            label: 'Barcode',
            link: 'barcode',
            icon: 'qr_code',
        },
    ]);

    public encoders = signal<MenuItem[]>([
        {
            label: 'Base64',
            link: 'base64',
            icon: 'abc',
        },
    ]);

    public decoders = signal<MenuItem[]>([]);

    public stringHashs = signal<MenuItem[]>([
        {
            label: 'SHA-3',
            link: 'sha3',
            icon: 'fingerprint',
        },
        {
            label: 'SHA-2',
            link: 'sha2',
            icon: 'fingerprint',
        },
        {
            label: 'MD5',
            link: 'md5',
            icon: 'fingerprint',
        },
        {
            label: 'SHA-1',
            link: 'sha1',
            icon: 'fingerprint',
        },
    ]);

    public otherUtilities = signal<MenuItem[]>([
        { label: 'Link Shortener', link: 'link-shortener', icon: 'link' },
        {
            label: 'String Compare',
            link: 'string-compare',
            icon: 'compare_arrows',
        },
    ]);

    buildTemplatedLink(prefix: string, link: string) {
        return `/${prefix}/${link}`;
    }
}
