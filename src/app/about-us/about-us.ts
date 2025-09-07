import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {History} from './history/history';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [
    MatTabGroup,
    MatTab,
    History
  ],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs implements OnInit {

  selectedIndex:number = 0;

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      if (type === '') {
        this.selectedIndex = 1;
      } else {
        this.selectedIndex = 0;
      }
    });
  }
}
