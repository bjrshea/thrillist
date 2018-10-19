import { Component, Input } from '@angular/core';
import { Featured } from '../models/featured.model';

@Component({
  selector: 'app-jumbo-article',
  templateUrl: './jumbo-article.component.html',
  styleUrls: ['./jumbo-article.component.css']
})

export class JumboArticleComponent {
  @Input() childBigFeaturedArticles: Featured[];
}
