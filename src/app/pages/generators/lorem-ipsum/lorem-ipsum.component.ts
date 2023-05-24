import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorCardComponent } from 'src/app/common/generator-card/generator-card.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lorem-ipsum',
  standalone: true,
  imports: [CommonModule, GeneratorCardComponent],
  templateUrl: './lorem-ipsum.component.html',
  styleUrls: ['./lorem-ipsum.component.scss'],
})
export class LoremIpsumComponent {
  form = new FormControl();
}
