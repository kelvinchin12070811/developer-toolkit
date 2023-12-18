import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import * as anime from 'animejs/lib/anime';
import { catchError, throwError } from 'rxjs';

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
        console.log(domain.href);

        this.httpClient
            .get(domain.href, {
                responseType: 'text',
                headers: new HttpHeaders({
                    'access-control-allow-origin': '*',
                }),
            })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.popupErrorOccurred();
                    return throwError(() => new Error(error.message));
                })
            )
            .subscribe(link => this.shortenLink.set(link));
    }

    onCopy() {
        if (!this.shortenLink()) return;

        this.clipboardService.copy(this.shortenLink());
        this.popupCopiedInfo();
    }

    popupCopiedInfo() {
        anime
            .timeline({ targets: '.alert-info', opacity: 1 })
            .add({
                targets: '.alert-info',
                translateX: ['130%', '0%'],
                duration: 500,
            })
            .add({
                targets: '.alert-info',
                translateX: ['0%', '130%'],
                duration: 500,
                delay: 2500,
            });
    }

    popupErrorOccurred() {
        anime
            .timeline({ targets: '.alert-error', opacity: 1 })
            .add({
                targets: '.alert-error',
                translateX: ['130%', '0%'],
                duration: 500,
            })
            .add({
                targets: '.alert-error',
                translateX: ['0%', '130%'],
                duration: 500,
                delay: 2500,
            });
    }
}
