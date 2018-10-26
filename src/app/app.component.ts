import { Component } from '@angular/core';
import { Featured } from './models/featured.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  featuredArticles: Featured[] = [
    new Featured('http://res.cloudinary.com/sagacity/image/upload/c_crop,h_666,w_1000,x_0,y_0/c_limit,w_1080/v1442255180/shutterstock_307495625_mxf5jf.jpg', 'TRAVEL', 'Ranking the best bridges in Portland'),
    new Featured('https://upload.wikimedia.org/wikipedia/commons/6/64/NYPizzaPie.jpg', 'FOOD & DRINK', 'Best pizza joint in Portland'),
    new Featured('http://img.timeinc.net/time/2010/portland_tavel/portland_park.jpg', 'TRAVEL', 'Your guide to Portland parks'),
    new Featured('http://4.bp.blogspot.com/-mNBkQs58tAw/U3JdKA8cK3I/AAAAAAAAH1w/LglMQ96EgaM/s1600/_IGP2944.JPG', 'TRAVEL', 'Best hikes within 45 minutes of Portland'),
    new Featured('https://assets3.thrillist.com/v1/image/1575694/size/tmg-article_default_mobile.jpg', 'FOOD & DRINK', 'Best vegan restaurants in Portland'),
  ]

  bigFeaturedArticles: Featured[] = [
    new Featured('https://www.teamunify.com/pnws2/_images/cust_bg_203_1315415959177.jpg', 'TRAVEL', ' BEST PLACES TO VISIT IN THE PACIFIC NORTHWEST')
  ]

  bigFeaturedMovies: Featured[] = [
    new Featured('https://www.youtube.com/embed/3aIIzSsCjfI', 'FOOD & DRINK', 'Ramen pizza -- really dough?')
  ]
}

// { "bigFeaturedArticles": [{
//     "picture": "https://www.teamunify.com/pnws2/_images/cust_bg_203_1315415959177.jpg",
//     "category": "TRAVEL",
//     "title": "BEST PLACES TO VISIT IN THE PACIFIC NORTHWEST"
//   }]
// }
//
// { "bigFeaturedMovies": [{
//     "picture": "https://www.youtube.com/embed/3aIIzSsCjfI",
//     "category": "FOOD & DRINK",
//     "title": "Ramen pizza -- really dough?"
//   }]
// }
