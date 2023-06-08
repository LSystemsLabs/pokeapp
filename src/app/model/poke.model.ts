export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonAttrs {
  id: number;
  type: string | string[];
  weight: number;
  avatar: string;
  moves: string[];
}
