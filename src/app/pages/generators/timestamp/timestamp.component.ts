/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import dayjs from 'dayjs';
import { FormsModule } from '@angular/forms';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';

@Component({
    selector: 'app-timestamp',
    standalone: true,
    imports: [CommonModule, FormsModule, GeneratorCardComponent],
    templateUrl: './timestamp.component.html',
    styleUrls: ['./timestamp.component.scss'],
})
export class TimestampComponent {
    timestamp = signal('');
    type = signal('iso8601');

    ngOnInit() {
        this.genISO860Timestamp();
    }

    generateTimestamp() {
        switch (this.type()) {
            case 'iso8601':
                this.genISO860Timestamp();
                break;
            case 'iso8601-no-separator':
                this.genISO8601NoSepTimestamp();
                break;
            case 'unix':
                this.genUnixTimestemp();
                break;
            default:
                this.timestamp.set('');
        }
    }

    genISO860Timestamp() {
        const date = dayjs();
        this.timestamp.set(date.format('YYYY-MM-DDTHH:mm:ss'));
    }

    genISO8601NoSepTimestamp() {
        const date = dayjs();
        this.timestamp.set(date.format('YYYYMMDDTHHmmss'));
    }

    genUnixTimestemp() {
        const data = dayjs();
        this.timestamp.set(data.unix().toString());
    }
}
