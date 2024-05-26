/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output,
    inject,
    signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardComponent } from '../container-card/container-card.component';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import * as anime from 'animejs/lib/anime';

@Component({
    selector: 'app-generator-card',
    standalone: true,
    imports: [CommonModule, ContainerCardComponent, ClipboardModule],
    templateUrl: './generator-card.component.html',
    styleUrls: ['./generator-card.component.scss'],
})
export class GeneratorCardComponent {
    @Input() public clipboardService = inject(ClipboardService);
    @Input() public title: string = '';
    @Input() public toCopy: string = '';
    @Input() public noCopy: boolean = false;
    @Input() public disableGeneratorBtn: boolean = false;
    @Input() public generateButtonLabel: string = 'Generate';
    @Output() public onGenerate: EventEmitter<any> = new EventEmitter();
    isCopiedToastVisible = signal(false);

    @HostListener('document:keydown.enter', ['$event'])
    emitOnGenerate() {
        this.onGenerate.emit();
    }

    onCopy() {
        if (!this.toCopy) return;

        this.clipboardService.copy(this.toCopy);
        anime
            .timeline({ targets: '.toast-item', opacity: 1 })
            .add({
                targets: '.toast-item',
                translateX: ['130%', '0%'],
                duration: 500,
            })
            .add({
                targets: '.toast-item',
                translateX: ['0%', '130%'],
                duration: 500,
                delay: 2500,
            });
    }
}
