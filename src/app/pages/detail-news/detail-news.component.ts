import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {
  // declaration of variables
Ref:any;
details :any[];

  constructor(public _data:NewsService, public  _route :ActivatedRoute) { }

  ngOnInit() {

 this.Ref=this._route.snapshot.paramMap.get('ref');
// this.data.getNews().subscribe(e=>{
//   this.details=e['articles'];
//   console.log(e);
// })
 this._data.getDetailsNews(this.Ref).subscribe(e=>{
   this.details=e['articles'];
   console.log(e);
 })
  }

}


