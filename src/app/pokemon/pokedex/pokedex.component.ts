import { Component } from '@angular/core';
import { PokemonApiService } from '../../pokemon-api.service';
import { Pokemon } from '../../../dataType/Pokemon';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  
  pokemons: Pokemon[] = [];
  
  constructor(private PokemonApiService: PokemonApiService) {
    this.PokemonApiService.GetAllPokemon().subscribe((data) => {
      this.pokemons = data;
    });
  }
}
