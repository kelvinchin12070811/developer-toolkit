import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import * as anime from 'animejs/lib/anime';

const API_DOMAIN = 'https://is.gd/create.php';

@Component({
    selector: 'app-link-shortener',
    standalone: true,
    imports: [CommonModule, ContainerCardComponent, HttpClientModule, FormsModule],
    templateUrl: './link-shortener.component.html',
    styleUrls: ['./link-shortener.component.scss'],
})
export class LinkShortenerComponent {
    private httpClient = inject(HttpClient);
    private clipboardService = inject(ClipboardService);

    public originalLink = signal('');
    public shortenLink = signal('');

    onShorten() {
        if (!this.originalLink()) return;

        const domain = new URL(API_DOMAIN);
        domain.searchParams.set('format', 'simple');
        domain.searchParams.set('url', this.originalLink());
        this.shortenLink.set(domain.href);
    }

    onCopy() {
        if (!this.shortenLink()) return;

        this.clipboardService.copy(this.shortenLink());
        anime
            .timeline({ targets: '.toast-item', opacity: 1 })
            .add({
                targets: '.toast-item',
                translateY: ['130%', '0%'],
                duration: 500,
            })
            .add({
                targets: '.toast-item',
                translateY: ['0%', '130%'],
                duration: 500,
                delay: 2500,
            });
    }
}
