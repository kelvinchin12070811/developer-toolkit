import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardComponent } from '../container-card/container-card.component';
import * as copy from 'copy-to-clipboard';
import * as anime from 'animejs/lib/anime';

@Component({
    selector: 'app-generator-card',
    standalone: true,
    imports: [CommonModule, ContainerCardComponent],
    templateUrl: './generator-card.component.html',
    styleUrls: ['./generator-card.component.scss'],
})
export class GeneratorCardComponent {
    @Input() public title: string = '';
    @Input() public toCopy: string = '';
    @Output() public onGenerate: EventEmitter<any> = new EventEmitter();
    isCopiedToastVisible = signal(false);

    emitOnGenerate() {
        this.onGenerate.emit();
    }

    onCopy() {
        if (!this.toCopy) return;

        copy(this.toCopy);
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
