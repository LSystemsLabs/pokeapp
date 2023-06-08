import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  map,
  switchMap,
} from 'rxjs';
import {
  API_URL,
  POKEMON_IMAGE_DEFAULT,
} from '../constants/settings.constants';
import { Pokemon, PokemonAttrs } from '../model/poke.model';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  public getPokemons$(): Observable<Pokemon[]> {
    const params: HttpParams = new HttpParams().append('limit', '150');
    return this.http
      .get(`${API_URL}/pokemon`, { params })
      .pipe(map((response: any) => response.results)) as Observable<Pokemon[]>;
  }

  public getPokemonInfo$(apiUrl: string): Observable<PokemonAttrs> {
    return this.http.get(apiUrl).pipe(
      map((response: any) => {
        const { sprites, moves, types, weight, id } = response;
        const attrs = {
          weight,
          avatar:
            sprites?.other?.['official-artwork']?.front_default ||
            POKEMON_IMAGE_DEFAULT,
          moves: moves.map((move: any) => move.move.name),
          type: types.map((type: any) => type.type.name),
          id,
        };
        // console.log('Características', attrs);

        return attrs;
      })
    ) as Observable<PokemonAttrs>;
  }

  public getSearch$(): BehaviorSubject<string> {
    return this.searchSubject;
  }

  public emitSearch(search: string): void {
    this.searchSubject.next(search);
  }

  public getTypes(): Observable<string[]> {
    return this.getPokemons$().pipe(
      switchMap((pokes: Pokemon[]) => {
        const atts = pokes.map((poke: Pokemon) =>
          this.getPokemonInfo$(poke.url)
        );
        return combineLatest(atts);
      }),
      map((atts: PokemonAttrs[]) => {
        const types = atts.flatMap((att: PokemonAttrs) => att.type as string[]);
        return [...new Set(types)];
      })
    );
  }
}
