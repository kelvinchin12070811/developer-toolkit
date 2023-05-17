import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  getThemeFromLocalStorage() {
    return localStorage.getItem('theme') ?? this.getDefaultTheme();
  }

  getDefaultTheme() {
    return document.querySelector('html')?.getAttribute('data-theme') ?? 'dark';
  }

  setThemeToLocalStorage(theme: string) {
    localStorage.setItem('theme', theme);
  }

  setTheme() {
    const theme = this.getThemeFromLocalStorage();
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
  }
}
