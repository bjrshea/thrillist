import { Component } from '@angular/core';
import { Featured } from './models/featured.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bigFeaturedMovies: Featured[] = [
    new Featured('https://www.youtube.com/embed/3aIIzSsCjfI', 'FOOD & DRINK', 'Ramen pizza -- really dough?')
  ]
}
