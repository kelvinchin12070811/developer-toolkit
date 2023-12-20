import { Component, HostListener, signal } from '@angular/core';
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

    @HostListener('document:keydown.enter', ['$event'])
    public onGenerate() {
        if (this.text() === '') return;

        console.log(this.text());

        const sha3 = SHA3(this.text(), { outputLength: this.outputLength() }).toString(enc.Hex);
        console.log(sha3);
        if (this.uppercase()) this.hash.set(sha3.toUpperCase());
        else this.hash.set(sha3.toLowerCase());
    }
}