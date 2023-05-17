import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent {
  configService = inject(ConfigService);
  theme = signal<string>(
    localStorage.getItem('theme') ?? this.configService.getDefaultTheme()
  );

  onThemeChanged() {
    this.configService.setThemeToLocalStorage(this.theme());
    this.configService.setTheme();
  }
}
