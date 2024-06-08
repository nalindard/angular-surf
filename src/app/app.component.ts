import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AboutComponent } from './about/about.component';

// If-Else component,
@Component({
  selector: 'if-else-component',
  template: `
    <strong>Logged In: {{ loggedIn }}</strong>
    @if (loggedIn){
    <p>Logged in</p>
    } @else{
    <p>Not logged in</p>
    }
  `,
  standalone: true,
})
export class IfElseComponent {
  loggedIn: boolean = false;
}

// For Component,
@Component({
  selector: 'for-component',
  template: `
    <h2>For Component</h2>
    @for (os of operatingSystems; track os.id) {
    {{ os.name }} <br />
    }
  `,
  standalone: true,
})
export class ForComponent {
  operatingSystems: { id: string; name: string }[] = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
}

// Attribute component,
@Component({
  selector: 'attribute-component',
  template: `
    <h2>Attribute Component</h2>
    <div [contentEditable]="contentEditable">
      This is a text that should be editable
    </div>
  `,
  standalone: true,
})
export class AttributeComponent {
  contentEditable = true;
}

// Events Component,
@Component({
  selector: 'events-component',
  template: `
    <h2>Events Component</h2>
    <strong style="font-size: 7rem;">{{ count }}</strong>
    <br />
    <button (click)="sayHi()">Click Me</button>
    <button (mouseover)="hovering()">Hover Over</button>
  `,
  standalone: true,
})
export class EventsComponent {
  count = 2;
  sayHi() {
    this.count++;
    console.log('Count changed to:', this.count);
  }
  hovering() {
    alert(`Hovering over the EventsComponent`);
  }
}

// Props component,
@Component({
  selector: 'props-component',
  template: `
    <h2>Props Component</h2>
    <strong style="text-decoration: underline;">Name: {{ name }}</strong>
  `,
  standalone: true,
})
export class PropsComponent {
  @Input() name = '';
}

// Emmit component,
@Component({
  selector: 'emmit-component',
  template: `
    <h2>Emmit Component</h2>
    <button (click)="emitChanges()">Click To Send Dat To Parent</button>
    <button (click)="countChange.emit(count)">
      Click To Send Dat To Parent
    </button>
  `,
  standalone: true,
})
export class EmmitComponent {
  count = 1;

  @Output() countChange = new EventEmitter<number>();

  emitChanges() {
    console.log(`Emmiting the count from child`);
    this.count++;
    this.countChange.emit(this.count);
  }
}

// Lazy load component,
@Component({
  selector: 'lazy-component',
  template: ` <h2>Lazy Load Component</h2> `,
  standalone: true,
})
export class LazyComponent {}

// Optimized Image component,
@Component({
  selector: 'optimized-image-component',
  imports: [NgOptimizedImage],
  // providers: [
  //   provideImgixLoader('https://angular.io/assets/images/logos/angular/')
  // ],
  template: `
    <h2>Optimized Image Component</h2>
    <h4>Static Image</h4>
    <img
      ngSrc="https://angular.io/assets/images/logos/angular/angular.svg"
      alt="Angular logo"
      width="76"
      height="76"
    />
    <br />
    <img
      ngSrc="angular.svg"
      alt="Angular logo with provider: commented out here"
      width="76"
      height="76"
    />
    <br />
    <h4>Optimized Image</h4>
    <img [ngSrc]="src" alt="Some image" width="76" height="76" />
    <div style="width: 100px; height: 100px; position: relative">
      <img [ngSrc]="src" alt="Some image" fill priority />
    </div>
  `,
  standalone: true,
})
export class OptimizedImageComponent {
  src =
    'https://lh3.googleusercontent.com/a/AEdFTp7XpqkUWiUjNRsv6HXSpTlH7s1KkwbBmzzJZvYa=s96-c';
}

// User component,
@Component({
  selector: 'user-component',
  imports: [
    IfElseComponent,
    ForComponent,
    AttributeComponent,
    EventsComponent,
    PropsComponent,
    EmmitComponent,
    LazyComponent,
    OptimizedImageComponent,
  ],
  template: `
    <section>
      <br />
      <br />
      This is from user component: {{ userName }}
      <br />

      <if-else-component />
      <br />

      <for-component />
      <br />

      <attribute-component />
      <br />

      <events-component />
      <br />
      <br />

      <props-component name="Falcon Edge" />
      <br />
      <br />

      <h4>
        Listing to the Emmit:
        <strong style="color: white;">{{ emmitvalue }}</strong>
      </h4>
      <emmit-component (countChange)="reciveEmmit($event)" />
      <br />
      <br />
      <br />
      <br />
      <br />

      <!-- @defer { -->
      @defer (on viewport) {
      <lazy-component />
      <!-- } @placeholder { -->
      } @placeholder (minimum 2s) {
      <p>Placeholder</p>
      <!-- } @loading { -->
      <!-- } @loading (minimum 2s) { -->
      } @loading (after 4s) {
      <p>Loading</p>
      }@error {
      <p>Error</p>
      }

      <br />
      <br />
      <br />

      <optimized-image-component />
    </section>
  `,
  standalone: true,
})
export class UserComponent {
  userName: string = 'Falcon Edge';
  loggedIn: boolean = false;

  emmitvalue: number = 999999;

  reciveEmmit(count: number) {
    this.emmitvalue = count;
    console.log('Reciving emmit from child to parent:', count);
  }
}

// Root component, ----------------------------------------------------------------------------------------------
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, RouterLink, AboutComponent],
  // templateUrl: './app.component.html',
  template: `
    Say Hi to Angular!
    {{ title }}
    {{ count * 2 + 2 }}

    <hr />

    <!-- <app-about /> -->

    <nav>
      <a routerLink="/">Home</a> | 
      <a routerLink="/user">User</a> |
      <a routerLink="/about">About</a> |
      <a routerLink="/forms">Forms</a> |
      <a routerLink="/injectable">Injectable</a> |
      <a routerLink="/pipes">Pipes</a>
    </nav>

    <hr />

    <!-- <user-component></user-component> -->
    <!-- <user-component /> -->

    <router-outlet />
  `,
  // styleUrl: './app.component.css'
  styles: `
  :host {
    color: #a144eb;
    background-color: #121212;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`,
})
export class AppComponent {
  title = 'angular-surf';
  count: number = 127;
}
