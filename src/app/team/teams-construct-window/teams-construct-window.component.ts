import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../dataType/Pokemon';
import { PokemonDataService } from '../../pokemon-data.service';

@Component({
  selector: 'app-teams-construct-window',
  templateUrl: './teams-construct-window.component.html',
  styleUrl: './teams-construct-window.component.css'
})
export class TeamsConstructWindowComponent {

  membres: Pokemon[];

  constructor(private teamService: PokemonDataService) {

  }

  AddMemberToTeam(pokemon:Pokemon){
    this.membres.push(pokemon);
    console.log(this.membres);
  }

  RemoveMember(pokemon:Pokemon){
    this.membres = this.membres.filter((p) => p !== pokemon);
   
  }
  
  SubmitTeam(){
    this.teamService.CreateTeam(this.membres).subscribe((team) => {
      console.log("Team created", team);
    });
  }

}
