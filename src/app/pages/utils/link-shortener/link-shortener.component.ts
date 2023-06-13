import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';

@Component({
    selector: 'app-link-shortener',
    standalone: true,
    imports: [CommonModule, ContainerCardComponent],
    templateUrl: './link-shortener.component.html',
    styleUrls: ['./link-shortener.component.scss'],
})
export class LinkShortenerComponent {}
