import {Component, inject, OnInit, signal} from '@angular/core';
import {collection, Firestore, getDocs, where, query} from '@angular/fire/firestore';

@Component({
  selector: 'app-home-side',
  imports: [],
  templateUrl: './home-side.html',
  styleUrl: './home-side.css'
})
export class HomeSide implements OnInit{

  protected readonly data = signal<any[]>([]);
  private firestore = inject(Firestore);

  async ngOnInit(): Promise<void> {
    const q = query(
      collection(this.firestore, 'sidenav-datas'),
      where('page', '==', 'home')
    );
    const snapshot = await getDocs(q);
    this.data.set(snapshot.docs.map(doc => doc.data()));
  }

}
