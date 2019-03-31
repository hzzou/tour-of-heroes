import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {
  //向构造函数里添加一个私有的heroService,其类型为HeroService.声明和赋值合并至一处
  constructor(private heroService: HeroService) { }

  //hero = 'Windstorm';//HeroComponent.hero组件的属性，不是变量,直接定义
  heroes:Hero[];
  //selectedHero:Hero;//自定义selectedHero属性类型是Hero类
  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero;
  // }
  //初始化
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
        .subscribe((heroes) => {
          console.log(heroes)// 服务里传过来的heroes数组
          console.log(this.heroes)//heroComponent自定义的属性
          this.heroes = heroes
        });
        //.subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
 
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
