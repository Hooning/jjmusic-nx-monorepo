import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [ButtonModule],
  selector: 'app-prime-ng',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p-button label="Click me"></p-button>
    </div>
  `,
  styles: [
    `
      div {
        text-align: center;
      }
      h1 {
        color: #3f51b5;
      }
    `,
  ],
})
export class PrimeNgComponent {
  title = 'Hello from PrimeNG!';
}
