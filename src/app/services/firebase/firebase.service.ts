import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private basePath = '/shares';
  private hotelsPath = '/hotels'
  constructor(
    private afDB: AngularFireDatabase,
    private firestore: AngularFirestore
  ) { }

  // get hotels
  get(path: string): Observable<any[]> {
    let observable = this.afDB.list(path).valueChanges().pipe(
      tap(
        () => { }, /**Success */
        catchError(err => {
          return this.handleError(err);
        })
      ));
    return observable;
  }


  handleError(err) {
    //Handle Error
    return err;
  }
}
