/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
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
    foregroundColour = signal<string>('000000');
    paddingSize = signal(2);
    scale = signal(2);
    barcodeType = signal<string>('qrcode');

    generateBarcode() {
        let canvas = document.createElement('canvas');
        bwipjs.toCanvas(canvas, {
            bcid: this.barcodeType(),
            text: this.text(),
            scale: this.scale(),
            backgroundcolor: this.barcodeBackground(),
            padding: this.paddingSize(),
            barcolor: this.foregroundColour(),
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

    setBarcodeForeground(colour: string) {
        this.foregroundColour.set(colour?.match(/#(.{6})/)?.[1] ?? '000000');
    }

    getBarcodeBackgroundColorInHex() {
        return `#${this.barcodeBackground()}`;
    }

    getBarcodeForegroundColorInHex() {
        return `#${this.foregroundColour()}`;
    }
}
