import { Injectable } from '@angular/core';
import { Featured } from './models/featured.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  featuredArticleData: FirebaseListObservable<any[]>;
  jumboArticleData: FirebaseListObservable<any[]>;
  featuredMovieData: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.featuredArticleData = database.list('featuredArticles');
    this.jumboArticleData = database.list('jumboArticles');
    this.featuredMovieData = database.list('featuredMovies');
  }

  getFeaturedArticleData(){
    return this.featuredArticleData;
  }

  getjumboArticleData(){
    return this.jumboArticleData;
  }

  getFeaturedMovieData(){
    return this.featuredMovieData;
  }

}
