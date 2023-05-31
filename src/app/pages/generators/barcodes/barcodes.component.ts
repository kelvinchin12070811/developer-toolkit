import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import bwipjs from 'bwip-js';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-barcodes',
    standalone: true,
    imports: [CommonModule, GeneratorCardComponent, FormsModule],
    templateUrl: './barcodes.component.html',
    styleUrls: ['./barcodes.component.scss'],
})
export class BarcodesComponent {
    barcode = signal<string>('');
    text = signal<string>('');
    barcodeType = signal<string>('qrcode');

    generateBarcode() {
        let canvas = document.createElement('canvas');
        bwipjs.toCanvas(canvas, {
            bcid: this.barcodeType(),
            text: this.text(),
            scale: 10,
        });
        this.barcode.set(canvas.toDataURL());
    }
}
