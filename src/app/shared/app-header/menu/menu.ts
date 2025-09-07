import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    MatButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
