import { Component, Input } from '@angular/core';
import { Featured } from '../models/featured.model'

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css']
})
export class FeaturedMovieComponent {
  @Input() childBigFeaturedMovies: Featured[];
}
