import { Component } from '@angular/core';
import { UserComponent } from '../app.component';

@Component({
  selector: 'app-home',
  imports: [UserComponent],
  template: `
    <h1>Home</h1>
    <p>This is Home</p>
    <hr>
    <user-component />
  `,
  standalone: true,
})
export class HomeComponent {}
