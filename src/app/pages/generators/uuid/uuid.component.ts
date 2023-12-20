/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { FormsModule } from '@angular/forms';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';

@Component({
    selector: 'app-uuid',
    standalone: true,
    imports: [CommonModule, FormsModule, GeneratorCardComponent],
    templateUrl: './uuid.component.html',
    styleUrls: ['./uuid.component.scss'],
})
export class UuidComponent {
    uuid = signal<string>('');
    uppercased = signal<boolean>(false);
    guidStyle = signal<boolean>(false);

    genUUID() {
        this.uuid.set(uuidv4());
        console.log(this.uuid());
    }

    getUUID() {
        return this.uppercased() ? this.uuid().toUpperCase() : this.uuid();
    }

    getGUID() {
        const uuid = this.getUUID();
        return uuid === '' ? '' : `{${uuid}}`;
    }

    getGeneratedUUID() {
        return this.guidStyle() ? this.getGUID() : this.getUUID();
    }
}
