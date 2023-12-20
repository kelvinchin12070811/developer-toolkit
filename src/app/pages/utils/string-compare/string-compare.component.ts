import { Component, HostListener, computed, signal } from '@angular/core';
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
    public lengthDiff = signal(0);
    public missMatchPattern = signal<MissMatchPattern>({
        match: '',
        unmatch: '',
        outOfSyncChar: '',
    });

    public originalPattern = computed(
        (): MissMatchPattern => ({
            match: this.leftHandSide().substring(0, this.stringMatch()! - 1),
            unmatch: this.leftHandSide().substring(
                Math.min(this.stringMatch()!),
                this.leftHandSide().length
            ),
            outOfSyncChar: this.leftHandSide()[this.stringMatch()! - 1],
        })
    );

    public getResult() {
        this.compareStrings();
        this.missMatchPattern.set({
            match: this.getMatchedCharacters(),
            unmatch: this.getUnmatchedCharacters(),
            outOfSyncChar: this.getUnmatchedCharacter(),
        });
    }

    public shouldCompareBtnDisabled() {
        return this.leftHandSide() == '' || this.rightHandSide() == '';
    }

    public getMatchedCharacters() {
        return this.rightHandSide().substring(0, this.stringMatch()! - 1);
    }

    public getUnmatchedCharacters() {
        return this.rightHandSide().substring(
            Math.min(this.stringMatch()!),
            this.rightHandSide().length
        );
    }

    public getUnmatchedCharacter() {
        return this.rightHandSide()[this.stringMatch()! - 1];
    }

    public getErrorDescription() {
        if (this.stringMatch() == null) return '';

        if (this.lengthDiff() > 0) {
            return 'Length mismatch: Left hand side is longer than Right hand side';
        } else if (this.lengthDiff() < 0) {
            return 'Length mismatch: Right hand side is longer than Left hand side';
        }

        return `Content mismatch: First mismatch located at position ${
            this.stringMatch() ?? 0
        } of right hand side which is '${this.rightHandSide()[(this.stringMatch() ?? 1) - 1]}'`;
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

        const sizeDiff = this.leftHandSide().length - this.rightHandSide().length;
        this.lengthDiff.set(sizeDiff);

        if (sizeDiff !== 0) {
            this.stringMatch.set(Math.min(this.leftHandSide().length, this.rightHandSide().length));
            return;
        }

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
