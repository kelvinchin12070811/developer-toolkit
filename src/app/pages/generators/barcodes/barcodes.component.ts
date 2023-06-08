import { Component, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
    platformID = inject(PLATFORM_ID);

    barcode = signal<string>('');
    text = signal<string>('');
    barcodeBackground = signal<string>('ffffff');
    paddingSize = signal(2);
    barcodeType = signal<string>('qrcode');

    generateBarcode() {
        let canvas = document.createElement('canvas');
        bwipjs.toCanvas(canvas, {
            bcid: this.barcodeType(),
            text: this.text(),
            scale: 10,
            backgroundcolor: this.barcodeBackground(),
            padding: this.paddingSize(),
        });
        this.barcode.set(canvas.toDataURL());
    }

    openInNewTabOnClick() {
        if (!isPlatformBrowser(this.platformID)) return;

        window.open(this.barcode(), '_blank');
    }

    setBarcodeBackground(colour: string) {
        this.barcodeBackground.set(colour?.match(/#(.{6})/)?.[1] ?? 'ffffff');
    }

    getBarcodeBackgroundColorInHex() {
        return `#${this.barcodeBackground()}`;
    }
}
