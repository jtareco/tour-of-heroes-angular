import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';

import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
  	this.messageService.add('HeroService: Fetched heroes');
	return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
  	this.messageService.add(`HeroService: fetched hero id=${id}`);
  	return of(HEROES.find(hero => hero.id === id));
  }
}
