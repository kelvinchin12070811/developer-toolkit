import { Component } from '@angular/core';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';

@Component({
    selector: 'app-md5',
    standalone: true,
    imports: [ContainerCardComponent],
    templateUrl: './md5.component.html',
    styleUrl: './md5.component.scss',
})
export class Md5Component {}
