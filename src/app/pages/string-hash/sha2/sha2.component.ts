import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';
import { enc, SHA224, SHA256, SHA384, SHA512 } from 'crypto-js';

@Component({
    selector: 'app-sha2',
    standalone: true,
    imports: [GeneratorCardComponent, FormsModule],
    templateUrl: './sha2.component.html',
    styleUrl: './sha2.component.scss',
})
export class Sha2Component {
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

        const sha2 = this.generateHashFromInput(this.text(), this.outputLength());
        if (this.uppercase()) this.hash.set(sha2.toUpperCase());
        else this.hash.set(sha2.toLowerCase());
    }

    public onOutputLengthChanged(value: string) {
        this.outputLength.set(parseInt(value));
    }

    private generateHashFromInput(input: string, outputLength: number) {
        switch (outputLength) {
            case 256:
                return SHA256(input).toString(enc.Hex);
            case 384:
                return SHA384(input).toString(enc.Hex);
            case 512:
                return SHA512(input).toString(enc.Hex);
            default:
                return SHA224(input).toString(enc.Hex);
        }
    }
}
