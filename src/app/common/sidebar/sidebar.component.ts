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
}
