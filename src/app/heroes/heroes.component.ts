import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
//import {Hero } from 'src/app/heroes/hero';
import { HEROES } from 'src/app/mockDB';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    /*hero: Hero ={
      id: 1,
      name: '',
      surname: ''
    };*/

    heroes= HEROES;

    selectedHero: Hero;
    
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void{ /*click listener*/
    this.selectedHero = hero;
  }
}
 