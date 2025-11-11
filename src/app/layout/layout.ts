import { Component } from '@angular/core';
import {Header} from './header/header';
import {RouterOutlet} from '@angular/router';
import {Menu} from './menu/menu';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    Header,
    RouterOutlet,
    Menu,
    Footer
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone: true
})
export class Layout {

}
