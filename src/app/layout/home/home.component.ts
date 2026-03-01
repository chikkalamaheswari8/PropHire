import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <h2>Dashboard Overview</h2>
      <p>Welcome to the PropHire Workflow System. Select an option from the sidebar to manage clients, projects, or build intelligent workflows using the visual builder.</p>
    </div>
  `,
  styles: [`
    .home-container {
      background: white;
      padding: 2rem;
      border-radius: 8px;
    }
  `]
})
export class HomeComponent { }
