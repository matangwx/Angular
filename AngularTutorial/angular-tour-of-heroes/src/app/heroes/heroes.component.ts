import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
