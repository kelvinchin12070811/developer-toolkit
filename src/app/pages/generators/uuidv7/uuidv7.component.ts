/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, signal } from '@angular/core';
import { CommonComponent } from '../../settings/common/common.component';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';
import { FormsModule } from '@angular/forms';
import { uuidv7 } from 'uuidv7';

@Component({
  selector: 'app-uuidv7',
  standalone: true,
  imports: [CommonComponent, GeneratorCardComponent, FormsModule],
  templateUrl: './uuidv7.component.html',
  styleUrl: './uuidv7.component.scss'
})
export class Uuidv7Component {
    uuid = signal<string>('');
    uppercased = signal<boolean>(false);
    guidStyle = signal<boolean>(false);

    genUUID() {
        this.uuid.set(uuidv7());
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
