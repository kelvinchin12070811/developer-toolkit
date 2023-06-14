import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { ConfigService } from './services/config.service';
import { FooterComponent } from './common/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, RouterModule, SidebarComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {
    titleService = inject(Title);
    configService = inject(ConfigService);

    title = 'developer-toolkit';

    constructor() {
        this.titleService.setTitle('Developer Toolkit');
    }

    ngOnInit() {
        this.configService.setTheme();
    }
}
