import  {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {

	getHeroes() : Promise<Hero[]>{
		return Promise.resolve(HEROES);
	}

	getHero(id:number):Promise<Hero>{
		return this.getHeroes()
			.then(heroes=>heroes.find(hero=>hero.id === id));

	}
	// getHeroesSlowly() : Promise<Hero[]>{
	//
	// 	return new Promise<Hero[]>(resolve =>
	// 	setTimeout(resolve,2000))
	// 		.then(()=>this.getHeroes());
	//
	// }


}

