import { Component, HostListener, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';

type MissMatchPattern = {
    match: string;
    unmatch: string;
    outOfSyncChar: string;
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
    public compareOriginal = signal(false);
    public ignoreCase = signal(false);
    public lengthDiff = signal(0);
    public missMatchPattern = signal<MissMatchPattern>({
        match: '',
        unmatch: '',
        outOfSyncChar: '',
    });

    public originalPattern = signal<MissMatchPattern>({
        match: '',
        unmatch: '',
        outOfSyncChar: '',
    });

    constructor() {
        effect(() => console.log({ rhs: this.missMatchPattern, lhs: this.originalPattern }));
    }

    public getResult() {
        this.compareStrings();
        this.missMatchPattern.set({
            match: this.getMatchedCharacters(this.leftHandSide(), this.stringMatch() ?? 1),
            unmatch: this.getUnmatchedCharacters(this.leftHandSide(), this.stringMatch() ?? 1),
            outOfSyncChar: this.getUnmatchedCharacter(this.leftHandSide(), this.stringMatch() ?? 1),
        });
        this.originalPattern.set({
            match: this.getMatchedCharacters(this.rightHandSide(), this.stringMatch() ?? 1),
            unmatch: this.getUnmatchedCharacters(this.rightHandSide(), this.stringMatch() ?? 1),
            outOfSyncChar: this.getUnmatchedCharacter(
                this.rightHandSide(),
                this.stringMatch() ?? 1
            ),
        });
    }

    public shouldCompareBtnDisabled() {
        return this.leftHandSide() == '' || this.rightHandSide() == '';
    }

    public getMatchedCharacters(text: string, stringCompare: number) {
        return text.substring(0, stringCompare - 1);
    }

    public getUnmatchedCharacters(text: string, stringCompare: number) {
        return text.substring(stringCompare, text.length);
    }

    public getUnmatchedCharacter(text: string, stringCompare: number) {
        return text[stringCompare - 1];
    }

    public getErrorDescription() {
        if (this.stringMatch() == null) return '';

        if (this.lengthDiff() > 0) {
            return `Length mismatch: Input string is longer than reference string by ${Math.abs(
                this.lengthDiff()
            )} character(s)`;
        } else if (this.lengthDiff() < 0) {
            return `Length mismatch: Input string is shorter than reference string by ${Math.abs(
                this.lengthDiff()
            )} character(s)`;
        }

        return `Content mismatch: First mismatch located at position ${
            this.stringMatch() ?? 0
        } of input string which is '${this.leftHandSide()[(this.stringMatch() ?? 1) - 1]}'`;
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
        let lhs = this.leftHandSide();
        let rhs = this.rightHandSide();

        if (this.ignoreCase()) {
            lhs = lhs.toLowerCase();
            rhs = rhs.toLowerCase();
        }

        if (lhs == '' && rhs == '') {
            return;
        }

        if (lhs === rhs) {
            this.stringMatch.set(0);
            return;
        }

        const sizeDiff = lhs.length - rhs.length;
        this.lengthDiff.set(sizeDiff);

        if (sizeDiff !== 0) {
            this.stringMatch.set(Math.min(lhs.length, rhs.length) + 1);
            return;
        }

        for (let i = 0; i < Math.min(lhs.length, rhs.length); i++) {
            if (lhs[i] !== rhs[i]) {
                this.stringMatch.set(i + 1);
                return;
            }
        }

        this.stringMatch.set(Math.min(lhs.length, rhs.length) + 1);
    }
}
