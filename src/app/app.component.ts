import { Component } from '@angular/core';
import { Featured } from './models/featured.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bigFeaturedArticles: Featured[] = [
    new Featured('https://www.teamunify.com/pnws2/_images/cust_bg_203_1315415959177.jpg', 'TRAVEL', ' BEST PLACES TO VISIT IN THE PACIFIC NORTHWEST')
  ]

  bigFeaturedMovies: Featured[] = [
    new Featured('https://www.youtube.com/embed/3aIIzSsCjfI', 'FOOD & DRINK', 'Ramen pizza -- really dough?')
  ]
}
