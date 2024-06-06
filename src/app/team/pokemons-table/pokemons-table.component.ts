import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../../dataType/Pokemon';
import { PokemonApiService } from '../../pokemon-api.service';
import { PokemonDataService } from '../../pokemon-data.service';

@Component({
  selector: 'app-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrl: './pokemons-table.component.css'
})
export class PokemonsTableComponent {

  pokemons:Pokemon[];
  
  constructor(private pokemonService: PokemonApiService) {
    this.pokemonService.GetAllPokemon().subscribe((pokemons) => {
      this.pokemons = pokemons;
    }); 
  }


  

  

}
