import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzurePokemonComponent } from './azure-pokemon.component';

const routes: Routes = [{ path: '', component: AzurePokemonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AzurePokemonRoutingModule { }
