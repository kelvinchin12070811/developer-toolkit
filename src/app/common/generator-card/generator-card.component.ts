import { Component, EventEmitter, Inject, Input, Output, inject, signal } from '@angular/core';
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
    @Output() public onGenerate: EventEmitter<any> = new EventEmitter();
    isCopiedToastVisible = signal(false);

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
