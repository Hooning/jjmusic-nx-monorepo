import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

/** PrimeNG Modules */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    RouterOutlet,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'Lessons',
      icon: 'pi pi-video',
      items: [
        {
          label: 'Jazz Theory',
        },
        {
          label: 'Funk Piano',
        },
      ],
      routerLink: '/lessons',
    },
    {
      label: 'Sheet Music',
      icon: 'pi pi-book',
      routerLink: '/sheet-music',
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/contact-us',
    },
  ];
}
