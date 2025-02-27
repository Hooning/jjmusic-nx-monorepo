import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-layout';
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
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
    },
    {
      label: 'Sheet Music',
      icon: 'pi pi-book',
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
    },
  ];
}
