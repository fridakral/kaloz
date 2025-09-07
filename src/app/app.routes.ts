import { Routes } from '@angular/router';
import {Home} from './home/home';
import {LocalGov} from './local-gov/local-gov';
import {AboutUs} from './about-us/about-us';

export const routes: Routes = [
  {
    path: 'kozsegunk/:type',
    component: AboutUs,
  },
  {
    path: '',
    component: Home
  },
  {
    path: 'onkormanyzat',
    component: LocalGov
  }
];
