import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Pokemon } from 'src/app/model/poke.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-poke-layout',
  templateUrl: './poke-layout.component.html',
  styleUrls: ['./poke-layout.component.scss'],
})
export class PokeLayoutComponent implements OnInit {
  private search$: BehaviorSubject<string>;
  private pokemons$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<
    Pokemon[]
  >([]);

  public _pokemons$: Observable<Pokemon[]> = this.pokemons$.asObservable();
  public pokemons: Pokemon[] = [];

  constructor(private pokeService: PokeService) {
    this.search$ = pokeService.getSearch$();
    this.setSearchBehavior();
  }

  public ngOnInit(): void {
    this.pokeService
      .getPokemons$()
      .pipe(
        tap((pokemons: Pokemon[]) => {
          this.pokemons = pokemons;
          this.pokemons$.next(pokemons);
        })
      )
      .subscribe();
  }

  public showMoves(moves: string[]): void {
    console.log(moves);
  }

  private setSearchBehavior(): void {
    this.search$
      .asObservable()
      .pipe(
        tap((search: string) => {
          const pokemons = this.pokemons.filter((poke: Pokemon) =>
            !!search ? poke.name.includes(search) : poke
          );
          this.pokemons$.next(pokemons);
        })
      )
      .subscribe();
  }
}
