import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

	constructor(private messageService: MessageService) { }
	// getHeroes(): Hero[] {
	// 	return HEROES;
	// }

	getHeroes(): Observable<Hero[]> {
		this.messageService.add('HeroService: fetched heroes');
		this.messageService.add('HeroService: fetched heroes1');
		this.messageService.add('HeroService: fetched heroes2');
		return of(HEROES);
	}

}
