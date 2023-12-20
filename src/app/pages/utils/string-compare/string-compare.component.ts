import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';

type MissMatchPattern = {
    match: string;
    unmatch: string;
};

@Component({
    selector: 'app-string-compare',
    standalone: true,
    imports: [ContainerCardComponent, FormsModule],
    templateUrl: './string-compare.component.html',
    styleUrl: './string-compare.component.scss',
})
export class StringCompareComponent {
    public stringMatch = signal<number | null>(null);
    public leftHandSide = signal('');
    public rightHandSide = signal('');
    public missMatchPattern = signal<MissMatchPattern>({ match: '', unmatch: '' });

    public getResult() {
        this.compareStrings();
        this.missMatchPattern.set({
            match: this.getMatchedCharacters(),
            unmatch: this.getUnmatchedCharacters(),
        });
    }

    public shouldCompareBtnDisabled() {
        return this.leftHandSide() == '' || this.rightHandSide() == '';
    }

    public getMatchedCharacters() {
        return this.rightHandSide().substring(0, this.stringMatch()! - 1);
    }

    public getUnmatchedCharacters() {
        return this.rightHandSide().substring(this.stringMatch()! - 1);
    }

    @HostListener('document:keypress', ['$event'])
    public triggeredByEnterKey(ev: KeyboardEvent) {
        if (ev.key !== 'Enter') return;

        this.getResult();
    }

    public reset() {
        this.stringMatch.set(null);
        this.leftHandSide.set('');
        this.rightHandSide.set('');
    }

    private compareStrings() {
        if (this.leftHandSide() == '' && this.rightHandSide() == '') return;

        if (this.leftHandSide() === this.rightHandSide()) {
            this.stringMatch.set(0);
            return;
        }

        for (
            let i = 0;
            i < Math.min(this.leftHandSide().length, this.rightHandSide().length);
            i++
        ) {
            if (this.leftHandSide()[i] !== this.rightHandSide()[i]) {
                this.stringMatch.set(i + 1);
                return;
            }
        }

        this.stringMatch.set(Math.min(this.leftHandSide().length, this.rightHandSide().length) + 1);
    }
}
