import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({

	selector: 'my-heroes',
	templateUrl: '/app/hero/hero.component.html',
	styleUrls: ['app/hero/hero.component.css']
})

export class HeroComponent implements OnInit {


	heroes: Hero[];
	selectedHero: Hero;


	constructor(private heroService: HeroService,
				private router: Router) {
	}

	ngOnInit(): void {

		this.getHeroes();
	}

	getHeroes(): void {

		this.heroService.getHeroes().then(heroes=>this.heroes = heroes);

	}

	onSelect(hero: Hero) {

		this.selectedHero = hero;
	}

	gotoDetail(hero: Hero) {

		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}

}

