import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    NavigationComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    
    RouterModule,
    RouterLinkActive,
  ],

  exports: [
    NavigationComponent,
    SearchbarComponent
  ]
})
export class NavigationModule { }
