import { Component, OnInit} from '@angular/core';
import { Featured } from '../models/featured.model';
import { DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.css'],
  providers: [DataService]
})
export class FeaturedArticleComponent implements OnInit {
  childFeaturedArticles: FirebaseListObservable<any[]>;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.childFeaturedArticles = this.dataService.getData();
  }
}
