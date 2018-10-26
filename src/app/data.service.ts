import { Injectable } from '@angular/core';
import { Featured } from './models/featured.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  data: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.data = database.list('featuredArticles');
  }

  getData(){
  return this.data;
}

}
