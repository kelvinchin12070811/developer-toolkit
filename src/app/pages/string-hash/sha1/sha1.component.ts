import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SHA1, enc } from 'crypto-js';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';

@Component({
    selector: 'app-sha1',
    standalone: true,
    imports: [GeneratorCardComponent, FormsModule],
    templateUrl: './sha1.component.html',
    styleUrl: './sha1.component.scss',
})
export class Sha1Component {
    public text = signal('');
    public hash = signal('');
    public uppercase = signal(false);

    public shouldGeneratedButtonDisabled() {
        return this.text() === '';
    }

    @HostListener('document:keydown.enter', ['$event'])
    public onGenerate() {
        if (this.text() === '') return;

        const sha1 = SHA1(this.text()).toString(enc.Hex);
        if (this.uppercase()) this.hash.set(sha1.toUpperCase());
        else this.hash.set(sha1.toLowerCase());
    }
}
