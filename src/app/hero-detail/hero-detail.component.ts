import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../hero";
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.styl']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ) { }

  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');//转化为number类型
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }
  goBack():void{
    this.location.back()
  }

  ngOnInit() {
    this.getHero()
  }

}
