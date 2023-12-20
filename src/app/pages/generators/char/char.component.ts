/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';

const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

@Component({
    selector: 'app-char',
    standalone: true,
    imports: [CommonModule, FormsModule, GeneratorCardComponent],
    templateUrl: './char.component.html',
    styleUrls: ['./char.component.scss'],
})
export class CharComponent {
    genUpperCase = signal(true);
    genLowerCase = signal(true);
    genNumbers = signal(true);
    genSymbols = signal(false);
    length = signal(10);
    result = signal('');

    ngOnInit() {
        this.generate();
    }

    generate() {
        let newResult = '';

        for (let times = 0; times < this.length(); times++) {
            let category: number[] = [];

            if (this.genLowerCase()) category.push(1);
            if (this.genUpperCase()) category.push(0);
            if (this.genNumbers()) category.push(2);
            if (this.genSymbols()) category.push(3);

            switch (category[Math.floor(Math.random() * category.length)]) {
                case 0:
                    newResult += this.uppercaseGenerator();
                    break;
                case 1:
                    newResult += this.lowercaseGenerator();
                    break;
                case 2:
                    newResult += this.numberGenerator();
                    break;
                case 3:
                    newResult += this.symbolGenerator();
                    break;
            }
        }

        this.result.set(newResult);
    }

    uppercaseGenerator() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    lowercaseGenerator() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    numberGenerator() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    symbolGenerator() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
}
