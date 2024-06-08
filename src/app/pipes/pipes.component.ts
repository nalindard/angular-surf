import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../../reverce.pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, DecimalPipe, ReversePipe],
  template: `
    <p>Pipes</p>
    <br />
    <hr />
    <br />
    {{ secret | uppercase }}
    <br />
    {{ othersDontKnow | lowercase }}

    <br>
    <hr>
    <ul>
      <li>Number with "decimal" {{ num | number:'1.2-2' }}</li>
      <li>Date with "date" {{ birthday  | date:'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>

    <br>
    <hr>
    <h4>Custom pipe:</h4>
    <p>{{ othersDontKnow | reverce }}</p>
  `,
  standalone: true,
})
export class PipesComponent {
  secret: string = 'Vue is the best framework - 💚';
  othersDontKnow: string = 'No other framework can be better than Vue';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
