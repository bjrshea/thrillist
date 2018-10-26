import { Component, OnInit } from '@angular/core';
import { Featured } from '../models/featured.model';
import { DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-jumbo-article',
  templateUrl: './jumbo-article.component.html',
  styleUrls: ['./jumbo-article.component.css'],
  providers: [DataService]
})

export class JumboArticleComponent implements OnInit {
  jumboArticles: FirebaseListObservable<any[]>;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.jumboArticles = this.dataService.getjumboArticleData();
  }
}
