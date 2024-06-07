import { Component } from '@angular/core';
import { Pokemon } from '../../dataType/Pokemon';
import { AzureServiceService } from '../azure-service.service';

@Component({
  selector: 'app-azure-pokemon',
  templateUrl: './azure-pokemon.component.html',
  styleUrl: './azure-pokemon.component.css'
})
export class AzurePokemonComponent {
  pokemon:any[];

  constructor(AzureService: AzureServiceService) {
    AzureService.getData().subscribe((data: Pokemon[]) => {
      this.pokemon = data;
    }); 
  }
}
