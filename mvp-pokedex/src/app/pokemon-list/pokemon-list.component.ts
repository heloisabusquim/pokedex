import { PokemonDataService } from './../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {

  pokemonName: string;
  randomNumber: number;
  pokemonId: string;
  pokemonImg: string;
  isLoading: boolean = true;

  constructor(private pokemonService: PokemonDataService) {}
  
  generateId(a, b) {
    var result = Math.floor(Math.random() * (b - a + 1)) + a;
    this.randomNumber = result;

    this.pokemonId = `#${this.randomNumber.toString().padStart(3, "0")}`;
    
  }

  ngOnInit(): void {
    this.getPokemonById();
  }

  getPokemonById(){
    this.generateId(1,151);
    this.pokemonService.getPokemonById(this.randomNumber)
    .pipe(finalize(() => {this.isLoading = false} ))
    .subscribe(
      (data) => {
        this.pokemonName = data.name;
        this.pokemonImg = data.sprites.other.dream_world.front_default;
        console.log(data);
      },
      (error) => {
        console.log("deu ruim", error);
      }
    )
  }
}
