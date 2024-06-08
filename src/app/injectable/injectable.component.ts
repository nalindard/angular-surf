import { CarService } from './../car.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-injectable-2',
  template: `
    <h2>Constructor-based DI</h2>
    <hr />
    <p>Car List:{{ display }}</p>
  `,
  standalone: true,
})
export class Injectable2Component {
  display: string;

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' 🚧 ');
  }
}

@Component({
  selector: 'app-injectable',
  imports: [Injectable2Component],
  template: `
    <h2>Injectable</h2>
    <hr />
    <p>Car List:{{ displayCars }}</p>

    <br />
    <br />

    <app-injectable-2 />
  `,
  standalone: true,
})
export class InjectableComponent {
  carService = inject(CarService);

  displayCars: string;

  constructor() {
    this.displayCars = this.carService.getCars().join(' ⭐ ');
  }
}
