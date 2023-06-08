import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pokemon, PokemonAttrs } from 'src/app/model/poke.model';
import { PokeService } from 'src/app/services/poke.service';
const tags = ['success', 'info', 'warning', 'danger'];
@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent implements OnInit {
  @Input({ required: true }) pokemon!: Pokemon;
  @Output() onShowMoves: EventEmitter<string[]> = new EventEmitter<string[]>();

  public pokemonAttrs$: Observable<PokemonAttrs> | null = null;
  public types: string = '';
  public nPokemon: string = '-';

  constructor(private pokeService: PokeService) {}

  public ngOnInit(): void {
    this.pokemonAttrs$ = this.pokeService
      .getPokemonInfo$(this.pokemon.url)
      .pipe(
        tap((attrs: PokemonAttrs) => {
          this.types = (attrs.type as string[]).join(',');
          this.nPokemon = `No.${attrs.id}`;
        })
      );
  }

  public showMoves(attrs: PokemonAttrs): void {
    this.onShowMoves.emit(attrs.moves);
  }
}
