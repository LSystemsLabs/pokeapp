import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokeService } from './services/poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pokeapp';
  public searchControl: FormControl = new FormControl();
  public types: { name: string; value: string }[] = [];

  constructor(private pokeService: PokeService) {}

  public ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((search: string) => {
      this.pokeService.emitSearch(search);
    });

    this.pokeService.getTypes().subscribe((types: string[]) => {
      types.forEach((type: string) =>
        this.types.push({ name: type, value: type })
      );
    });
  }
}
