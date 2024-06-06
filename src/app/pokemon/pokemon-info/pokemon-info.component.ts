import { Component } from '@angular/core';
import { Pokemon } from '../../../dataType/Pokemon';
import { PokemonApiService } from '../../pokemon-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css'
})
export class PokemonInfoComponent {

  pokemon?: Pokemon;
  id: number;

  constructor(private PokemonApiService: PokemonApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = route.snapshot.params['id'];
      console.log(this.id);
      this.PokemonApiService.GetAllPokemon().subscribe((data: Pokemon[]) => {
        this.pokemon = data.find(pokemon => pokemon.id == this.id);
      });
    })
  };

}
