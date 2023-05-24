import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardComponent } from '../container-card/container-card.component';
import * as copy from 'copy-to-clipboard';

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
        this.isCopiedToastVisible.set(true);
        setTimeout(() => this.isCopiedToastVisible.set(false), 5000);
    }
}
