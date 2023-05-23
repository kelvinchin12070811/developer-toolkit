import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.scss'],
})
export class ContainerCardComponent {
  @Input() title: string;

  constructor() {
    this.title = 'Untitled';
  }
}
