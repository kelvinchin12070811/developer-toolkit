import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  config = inject(ConfigService);
}
