import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  getCurrentYear(): number {
    return dayjs().year();
  }
}
