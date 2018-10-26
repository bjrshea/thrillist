import { Component, OnInit } from '@angular/core';
import { Featured } from '../models/featured.model'
import { DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css'],
  providers: [DataService]
})
export class FeaturedMovieComponent implements OnInit {

  featuredMovies: FirebaseListObservable<any[]>;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.featuredMovies = this.dataService.getFeaturedMovieData();
  }
}
