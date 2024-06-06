import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared.module';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';


@NgModule({
  declarations: [
    PokemonComponent,
    PokedexComponent,
    PokemonInfoComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    
    SharedModule,
    NavigationModule,
  ]
})
export class PokemonModule { }
