import {Component, OnInit, signal} from '@angular/core';
import {Layout} from './layout/layout';
import {PrimeNG} from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [ Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('kaloz');

  constructor(
    private primeng: PrimeNG
  ) {
  }

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
