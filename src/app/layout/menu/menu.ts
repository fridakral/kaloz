import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  imports: [
    Menubar
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit{
  navigationItems: MenuItem[] | undefined;
  autoHideDelay: number = 1000;

  ngOnInit(): void {
    this.navigationItems = [
      {
        label: 'Lakossági információk',
        items :[
          {
            label: 'Egészségügy'
          },
          {
            label: 'Oktatás',
            items :[
              {
                label: 'Aranyalma Óvoda és Bölcsöde',
                routerLink: '/ovoda'
              },
              {
                label: 'Szent István Álltalános Iskola',
                routerLink: '/iskola'
              }
            ]
          },
          {
            label: 'Kultúra'
          },
          {
            label: 'Sport'
          },
          {
            label: 'Civil szervezetek'
          },
          {
            label: 'Szolgáltatások'
          }
        ]
      },
      {
        label: 'Önkormányzat'
      },
      {
        label: 'Események'
      },
      {
        label: 'Pályázatok'
      },
      {
        label: 'Hírek'
      }
    ]
  }
}
