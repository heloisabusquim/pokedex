import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomBntComponent } from './components/random-bnt/random-bnt.component';
import { PokemonChipsComponent } from './components/pokemon-chips/pokemon-chips.component';



@NgModule({
  declarations: [
    RandomBntComponent,
    PokemonChipsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonChipsComponent
  ]
})
export class SharedModule { }
