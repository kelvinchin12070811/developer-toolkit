import { Component, signal } from '@angular/core';
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
    public uppercase = signal(false);

    public shouldGenerateBtnDisabled() {
        return this.text() === '';
    }

    public onGenerate() {
        if (this.text() === '') return;

        const md5 = MD5(this.text()).toString(enc.Hex);
        if (this.uppercase()) this.hash.set(md5.toUpperCase());
        else this.hash.set(md5.toLowerCase());
    }
}
