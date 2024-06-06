import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';



@NgModule({
  declarations: [
    CardComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive, 
  ],

  exports: [
    CardComponent,
    HeroSectionComponent,
  ]
})
export class SharedModule { }
