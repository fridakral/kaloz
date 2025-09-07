import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';


@Component({
  selector: 'app-home',
  imports: [
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardImage

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
