/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SHA3, enc } from 'crypto-js';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';

@Component({
    selector: 'app-sha3',
    standalone: true,
    imports: [GeneratorCardComponent, FormsModule],
    templateUrl: './sha3.component.html',
    styleUrl: './sha3.component.scss',
})
export class Sha3Component {
    public text = signal('');
    public hash = signal('');
    public uppercase = signal(false);
    public outputLength = signal(224);

    public shouldGeneratedButtonDisabled() {
        return this.text() === '';
    }

    public onGenerate() {
        if (this.text() === '') return;

        const sha3 = SHA3(this.text(), { outputLength: this.outputLength() }).toString(enc.Hex);
        if (this.uppercase()) this.hash.set(sha3.toUpperCase());
        else this.hash.set(sha3.toLowerCase());
    }

    public onOutputLengthChanged(value: string) {
        this.outputLength.set(parseInt(value));
    }
}
