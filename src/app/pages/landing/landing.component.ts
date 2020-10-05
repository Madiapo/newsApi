import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
//import { DetailNewsComponent } from './pages/detail-news/detail-news.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  //declare a variable
  details : any;

  constructor( public _data : NewsService) { }

  ngOnInit() {
    this._data.getNews().subscribe( e =>{
      console.log(e);
      this.details=e['articles'];
    } )


  }

}
