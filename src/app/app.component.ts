import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterModule, SidebarComponent, HeaderComponent],
})
export class AppComponent {
  titleService = inject(Title);

  title = 'developer-toolkit';

  constructor() {
    this.titleService.setTitle('Developer Toolkit');
  }
}
