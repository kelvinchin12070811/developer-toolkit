import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import bwipjs from 'bwip-js';

@Component({
    selector: 'app-barcodes',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './barcodes.component.html',
    styleUrls: ['./barcodes.component.scss'],
})
export class BarcodesComponent {
    barcode = signal<string>('');

    ngOnInit() {
        let canvas = document.createElement('canvas');
        bwipjs.toCanvas(canvas, {
            bcid: 'datamatrix',
            text: '0123456789',
            scale: 10,
        });
        this.barcode.set(canvas.toDataURL());
    }
}
