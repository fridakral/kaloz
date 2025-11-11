import {Component, OnInit} from '@angular/core';
import {Card} from 'primeng/card';

@Component({
  selector: 'app-greeting',
  imports: [
    Card,
  ],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss',
})
export class Greeting implements OnInit{
  greeting = {
    title : '',
    message : '',
    from: '',
    image: ''
  }

  ngOnInit(): void {
    this.greeting.title = 'Kedves Látogató, szeretettel köszöntöm községünk honlapján!';
    this.greeting.message = 'A 2500 főt számláló Káloz Fejér megye déli részén, a Sárvíz mentén fekszik, Székesfehérvártól 30, az M7-es autópályától 20 km-re. Megközelítése a 63. számú főútról Sárkeresztúr településtől nyugati irányban, valamint az M7-esről letérve a Szabadbattyántól Örspuszta felé tartó úton lehetséges. A Káloz-Dég összekötő útnak köszönhetően a Balatoni térség is könnyebben elérhető.\n' +
      'Testvértelepülési kapcsolatot ápolunk a romániai Kárásztelekkel, és a lengyelországi Dziemiany-val. A falu folyamatosan lakott terület Szent István király kora óta, Fejér megye egyik legrégibb települése. 2009-ban ünnepelte megalapításának ezredik évfordulóját. A környék gazdag kelta-, avar- és római kori emlékekben. Káloz és környékének tulajdonosai 1650-től 1948-ig a Zichy család és leszármazottaik voltak. Műemlék védelem alatt áll a község 1787-1788-ban épült római katolikus temploma, és a Belmajorban található, 18,5 hektáros parkkal övezett Zichy-kastély.\n' +
      'A rendszerváltást követően a község sokat fejlődött, és mai is folyamatos bővülés, újjászületés jellemzi. Víz, szennyvíz, villany, gázvezeték, telefon, kábeltelevízió és az internet hálózat teljes mértékben kiépült. A település központjában közművesített lakópark került kialakításra 34 ingatlannal, ahova várjuk a községünkben letelepedni szándékozók jelentkezését. A falu intézményei (óvoda, általános iskola, faluház, könyvtár, sportcentrum) magas színvonalon működnek, továbbá jól felszerelt háziorvosi és fogorvosi rendelő biztosítja az egészségügyi ellátást. Káloz kereskedelmi ellátottsága jó, az üzleteket és vendéglátóhelyeket többnyire helyi lakosok üzemeltetik.\n' +
      'A természet adományai, a Sárvíz csatorna partján elterülő Sárrét kies látványa, gazdag állat- és növényvilága vonzza a szabadba vágyó turistákat, és természetbarátokat. Mára kialakult a falu eseményeinek rituális évköre, amelynek színes, aktuális programjairól e honlapon böngészve tájékozódhat.\n' +
      'Káloz látványosságait, építészeti, valamint természeti értékeit ajánlom minden érdeklődő figyelmébe. Várjuk az ide érkezőket, akár gazdasági, akár kulturális céllal, vagy egyszerűen kirándulni, kikapcsolódni érkeznek hozzánk.'
    this.greeting.from = 'Simon Csaba - polgármester';
    this.greeting.image = 'home_picture.png';
  }



}
