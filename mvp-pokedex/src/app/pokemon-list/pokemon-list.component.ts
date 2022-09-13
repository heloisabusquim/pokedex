import { PokemonDataService } from './../services/pokemon-data.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonDataService) { }

  
  generateId(a, b) {
    var result = Math.floor(Math.random() * (b - a + 1)) + a;
    if(result < 10){
      return "00" + result.toString();
    }
    if(result < 100){
      return "0" + result.toString();
    }
    return result;
  }
  
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      console.log(response);
    })
  }
}
