import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AzurePokemonRoutingModule } from './azure-pokemon-routing.module';
import { AzurePokemonComponent } from './azure-pokemon.component';


@NgModule({
  declarations: [
    AzurePokemonComponent
  ],
  imports: [
    CommonModule,
    AzurePokemonRoutingModule
  ]
})
export class AzurePokemonModule { }
