import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  @Input() title: string;
  @Input() texte: string;
  @Input() btnTexte: string;

  @Input() image: string;
  @Input() imageAlt: string;
  

}
