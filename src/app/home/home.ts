import { Component } from '@angular/core';
import {Greetings} from './greetings/greetings';
import {HomeSide} from './home-side/home-side';

@Component({
  selector: 'app-home',
  imports: [
    Greetings,
    HomeSide
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
