import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	// hero: Hero = {
	//   id: 1,
	//   name: 'Windstorm'
	// };
  selectedHero: Hero;
  hero: Hero[];
  // hero = HEROES;


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }
  //original
  // getHeroes(): void {
  //   this.hero = this.heroService.getHeroes();
  // }

  //with observable
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(hero => this.hero = hero);
  }

}
