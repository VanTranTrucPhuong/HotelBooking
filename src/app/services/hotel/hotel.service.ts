import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    public http: Http, 
    public afDB: AngularFireDatabase, 
    private af: AngularFireModule, 
    private user: UserService,
    protected afstore: AngularFirestore) {
    console.log('Hello HutProvider Provider');
  }

  retrieveHotels() {
    return this.afstore.collection('/hotels');
  }
}
