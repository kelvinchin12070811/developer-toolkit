/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
    selector: 'app-lorem-ipsum',
    standalone: true,
    imports: [CommonModule, GeneratorCardComponent, ReactiveFormsModule, FormsModule],
    templateUrl: './lorem-ipsum.component.html',
    styleUrls: ['./lorem-ipsum.component.scss'],
})
export class LoremIpsumComponent {
    form = new FormGroup({
        size: new FormControl(3, [Validators.required, Validators.min(1)]),
        type: new FormControl('paragraph'),
    });
    lorem = new LoremIpsum();
    result = signal('');

    get sizeField() {
        return this.form.get('size');
    }

    onSubmit() {
        if (!this.form.valid) return;

        const values = this.form.value;
        console.log(typeof values.size);
        console.log(values.type);

        switch (values.type) {
            case 'sentence':
                this.result.set(
                    this.lorem.generateSentences(values?.size ?? 0).replaceAll('\n', '\n\n')
                );
                break;
            case 'word':
                this.result.set(
                    this.lorem.generateWords(values?.size ?? 3).replaceAll('\n', '\n\n')
                );
                break;
            case 'paragraph':
                this.result.set(
                    this.lorem.generateParagraphs(values?.size ?? 0).replaceAll('\n', '\n\n')
                );
                break;
        }
    }
}
