import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {


  constructor(private heroService: HeroService) { }

  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): Hero[] {
    return this.heroService.getHeroes();
  }

  ngOnInit() {
    this.heroes = this.getHeroes();
  }

}
