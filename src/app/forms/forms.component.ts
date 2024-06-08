import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  imports: [ReactiveFormsModule],
  template: `
    <h2>Reactive Form module</h2>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>

      <br />
      <hr />

      <h2>Profile Form</h2>
      <p>Name: {{ profileForm.value.name }}</p>
      <p>Email: {{ profileForm.value.email }}</p>
    </form>
  `,
  standalone: true,
})
export class ReactiveFormComponent {
  profileForm = new FormGroup({
    name: new FormControl('Falcon Edge', Validators.required),
    email: new FormControl('falcon@infinite.edge', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormComponent],
  template: `
    <h2>Forms Page</h2>
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>

    <br />
    <hr />
    <br />

    <reactive-form />
  `,
  standalone: true,
})
export class FormsComponent {
  username = 'Falcon Edge';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
