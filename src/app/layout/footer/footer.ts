import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit{
  contacts:{icon: PrimeIcons, data: string}[]=[];
  openingHours:{label: string, data: string}[]=[];

  ngOnInit(): void {
    this.contacts = [
      {
        icon: PrimeIcons.MAP_MARKER,
        data: '8124, Káloz Bajcsy-Zsilinszky utca 3'
      },
      {
        icon: PrimeIcons.PHONE,
        data: '+36-25/506-448'
      },
      {
        icon: PrimeIcons.ENVELOPE,
        data: 'onkormanyzat@kaloz.hu'
      },
      {
        icon: PrimeIcons.PRINT,
        data: '+36-25/506-448'
      }
    ];
    this.openingHours = [
      {
        label: 'H',
        data: '08:00 - 18:00'
      },
      {
        label: 'K',
        data: '08:00 - 18:00'
      },
      {
        label: 'Sz',
        data: '08:00 - 18:00'
      },
      {
        label: 'Cs',
        data: '08:00 - 18:00'
      },
      {
        label: 'P',
        data: '08:00 - 18:00'
      }
    ]
  }


}
