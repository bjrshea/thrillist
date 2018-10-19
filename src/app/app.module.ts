import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedArticleComponent } from './featured-article/featured-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
