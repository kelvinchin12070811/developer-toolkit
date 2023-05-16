import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent {
  theme: string = localStorage.getItem('theme') ?? 'light';

  constructor() {
    this.setTheme();
  }

  onThemeChanged() {
    this.setTheme();
    localStorage.setItem('theme', this.theme);
  }

  private setTheme() {
    document.querySelector('html')?.setAttribute('data-theme', this.theme);
  }
}
