import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerCardComponent } from 'src/app/common/container-card/container-card.component';

@Component({
    selector: 'app-string-compare',
    standalone: true,
    imports: [ContainerCardComponent, FormsModule],
    templateUrl: './string-compare.component.html',
    styleUrl: './string-compare.component.scss',
})
export class StringCompareComponent {
    public stringMatch = signal<boolean | null>(null);
    public leftHandSide = signal('');
    public rightHandSide = signal('');

    public getResult() {
        if (this.leftHandSide() == '' && this.rightHandSide() == '') return;

        this.stringMatch.set(this.leftHandSide().match(this.rightHandSide()) != null);
    }

    public shouldCompareBtnDisabled() {
        return this.leftHandSide() == '' || this.rightHandSide() == '';
    }

    public reset() {
        this.stringMatch.set(null);
        this.leftHandSide.set('');
        this.rightHandSide.set('');
    }
}
