import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-chips',
  templateUrl: './pokemon-chips.component.html',
  styleUrls: ['./pokemon-chips.component.css']
})
export class PokemonChipsComponent implements OnInit {

  pokemonChip_a: string;
  pokemonChip_b: string;
  randomNumber: number;
  isLoading: boolean = true;
    
  constructor(private pokemonService: PokemonDataService) { }

  ngOnInit(): void {
    // this.getPokemonChipsById();
  }

  generateId(a, b) {
    var result = Math.floor(Math.random() * (b - a + 1)) + a;
    this.randomNumber = result;    
  }

  // getPokemonChipsById(){
  //   this.generateId(1,151);
  //   this.pokemonService.getPokemonChipsById(this.randomNumber)
  //   .pipe(finalize(() => {this.isLoading = false} ))
  //   .subscribe(
  //     (data) => {
  //       this.pokemonChip_a = data.types;
  //       this.pokemonChip_b = data.types;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log("deu ruim", error);
  //     }
  //   )
  // }

}
