import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { SearchComponent } from './search/search.component';

const routes:Routes = [
  { path:'heroes', component:HeroesComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'search', component:SearchComponent },
  { path:'', redirectTo:'/dashboard', pathMatch:'full' },
  { path:'detail/:id', component:HeroDetailComponent },

]; 
//使用imports导入定义的routes，初始化路由器，并让它开始监听浏览器中地址的变化
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
