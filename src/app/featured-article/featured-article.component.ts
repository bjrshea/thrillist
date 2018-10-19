import { Component, Input} from '@angular/core';
import { Featured } from '../models/featured.model';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.css']
})
export class FeaturedArticleComponent {
  @Input() childFeaturedArticles: Featured[];
}
