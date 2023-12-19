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
