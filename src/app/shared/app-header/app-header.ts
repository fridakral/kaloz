import {Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {Menu} from './menu/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-app-header',
  imports: [
    MatToolbar,
    Menu,
    MatIconModule,
    MatIconButton,
  ],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss'
})
export class AppHeader {

  isDarkMode: boolean = false;

  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    if(this.isDarkMode){
      document.body.classList.add('dark-mode');
    }else {
      document.body.classList.remove('dark-mode');
    }
  }
}
