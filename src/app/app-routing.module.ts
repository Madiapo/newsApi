import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DetailNewsComponent } from './pages/detail-news/detail-news.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
const routes: Routes = [

  {path:'',redirectTo:'/landing',pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path: 'detail-news/:ref', component: DetailNewsComponent },
  {path:'Searchpage/:ref',component:SearchpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

