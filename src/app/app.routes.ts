import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserpageComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { FormsComponent } from './forms/forms.component';
import { InjectableComponent } from './injectable/injectable.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
  {
    path: '',
    // component: () => import('./home/home.component').then(m => m.HomeComponent)
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserpageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page',
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'injectable',
    component: InjectableComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
];
