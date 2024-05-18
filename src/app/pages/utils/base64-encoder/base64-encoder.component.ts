/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';

@Component({
    selector: 'app-base64-encoder',
    standalone: true,
    imports: [CommonModule, FormsModule, ContainerCardComponent, GeneratorCardComponent],
    templateUrl: './base64-encoder.component.html',
    styleUrl: './base64-encoder.component.scss',
})
export class Base64EncoderComponent {
    base64String = signal<string>('');
    input = signal<string>('');

    onGenerate(): void {
        this.base64String.set(btoa(this.input()));
    }
}
