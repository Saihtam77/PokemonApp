import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'Pokedex', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'Pokedex/pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'Team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
