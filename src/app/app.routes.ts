import { Routes } from '@angular/router';
import {NotFound} from './pages/not-found/not-found';
import {Homepage} from './pages/homepage/homepage';

export const routes: Routes = [
  { path: '', component: Homepage },
  // generic route for not found
  { path: '**', component: NotFound },
];
