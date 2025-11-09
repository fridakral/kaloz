import { Routes } from '@angular/router';
import {Greeting} from './greeting/greeting';
import {Kindergarden} from './education/kindergarden/kindergarden';
import {School} from './education/school/school';

export const routes: Routes = [
  {
    path: '',
    component: Greeting
  },
  {
    path: 'ovoda',
    component: Kindergarden
  },
  {
    path: 'iskola',
    component: School
  }
];
