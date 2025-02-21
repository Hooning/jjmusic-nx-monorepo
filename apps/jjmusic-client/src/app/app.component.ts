import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimeNgComponent } from './primeng.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, PrimeNgComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'jjmusic-client';
}
