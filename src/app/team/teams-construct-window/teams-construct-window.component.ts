import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../dataType/Pokemon';
import { PokemonDataService } from '../../pokemon-data.service';

@Component({
  selector: 'app-teams-construct-window',
  templateUrl: './teams-construct-window.component.html',
  styleUrl: './teams-construct-window.component.css'
})
export class TeamsConstructWindowComponent {

  membres: Pokemon[];
  @Output() addMemberEvent = new EventEmitter<Pokemon>();

 

  constructor(private teamService: PokemonDataService) {}
  
  AddMember(pokemon: Pokemon){
    this.membres.push(pokemon);
    console.log(this.membres);
    this.addMemberEvent.emit(pokemon);
  }
  SubmitTeam(){
    this.teamService.CreateTeam(this.membres).subscribe((team) => {
      console.log("Team created", team);
    });
  }

}
