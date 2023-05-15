import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterModule],
})
export class AppComponent {
  titleService = inject(Title);

  title = 'developer-toolkit';

  constructor() {
    this.titleService.setTitle('Developer Toolkit');
  }
}
