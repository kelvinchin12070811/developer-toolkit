import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardComponent } from '../container-card/container-card.component';

@Component({
  selector: 'app-generator-card',
  standalone: true,
  imports: [CommonModule, ContainerCardComponent],
  templateUrl: './generator-card.component.html',
  styleUrls: ['./generator-card.component.scss'],
})
export class GeneratorCardComponent {
  @Input() public title: string = '';
  @Output() public onGenerate: EventEmitter<any> = new EventEmitter();
  @Output() public onCopy: EventEmitter<any> = new EventEmitter();

  emitOnGenerate() {
    this.onGenerate.emit();
  }
}
