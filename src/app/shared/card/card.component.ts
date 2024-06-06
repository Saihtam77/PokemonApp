import { Component, Input} from '@angular/core';
import { Pokemon } from '../../../dataType/Pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input() image?: string;
  @Input() imageAlt?: string;
  
  @Input() title?: string;
  @Input() texte?: string;
  
  @Input() id?: number;
  
  @Input() btnText?: string;
  
  @Input() pokemonTypes?: Pokemon['apiTypes'];
  
  constructor() {}
}
