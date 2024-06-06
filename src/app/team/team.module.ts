import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { PokemonsTableComponent } from './pokemons-table/pokemons-table.component';
import { TeamsConstructWindowComponent } from './teams-construct-window/teams-construct-window.component';

@NgModule({
  declarations: [
    TeamComponent,
    PokemonsTableComponent,
    TeamsConstructWindowComponent,
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
