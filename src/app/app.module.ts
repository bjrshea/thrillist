import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedArticleComponent } from './featured-article/featured-article.component';
import { JumboArticleComponent } from './jumbo-article/jumbo-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedArticleComponent,
    JumboArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
