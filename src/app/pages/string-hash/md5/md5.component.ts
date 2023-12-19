import { Component, effect, signal } from '@angular/core';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';
import { MD5, enc } from 'crypto-js';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-md5',
    standalone: true,
    imports: [GeneratorCardComponent, FormsModule],
    templateUrl: './md5.component.html',
    styleUrl: './md5.component.scss',
})
export class Md5Component {
    public text = signal('');
    public hash = signal('');

    onGenerate() {
        this.hash.set(MD5(this.text()).toString(enc.Hex));
    }
}
