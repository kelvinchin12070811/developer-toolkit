/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';
import {
    HttpClient,
    HttpClientJsonpModule,
    HttpClientModule,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import * as anime from 'animejs/lib/anime';
import { catchError, finalize, map, tap, throwError } from 'rxjs';

const API_DOMAIN = 'https://is.gd/create.php';

@Component({
    selector: 'app-link-shortener',
    standalone: true,
    imports: [
        CommonModule,
        ContainerCardComponent,
        HttpClientModule,
        FormsModule,
        HttpClientJsonpModule,
    ],
    templateUrl: './link-shortener.component.html',
    styleUrls: ['./link-shortener.component.scss'],
})
export class LinkShortenerComponent {
    private httpClient = inject(HttpClient);
    private clipboardService = inject(ClipboardService);

    public originalLink = signal('');
    public shortenLink = signal('');
    public isLoading = signal(false);

    onShorten() {
        if (!this.originalLink()) return;

        this.isLoading.set(true);
        const domain = new URL(API_DOMAIN);
        domain.searchParams.set('format', 'json');
        domain.searchParams.set('url', this.originalLink());

        this.httpClient
            .jsonp(domain.href, 'callback')
            .pipe(
                map((res: any) => {
                    if ('shorturl' in res) return res.shorturl;

                    let errorMessage = `${res.errormessage} (code ${res.errorcode})`;
                    throw new Error(errorMessage);
                }),
                catchError((error: HttpErrorResponse) => {
                    this.popupErrorOccurred();
                    return throwError(() => new Error(error.message));
                }),
                finalize(() => this.isLoading.set(false))
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
