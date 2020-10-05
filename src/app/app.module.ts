import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsService } from './services/news.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { DetailNewsComponent } from './pages/detail-news/detail-news.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DetailNewsComponent,
    SearchpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
