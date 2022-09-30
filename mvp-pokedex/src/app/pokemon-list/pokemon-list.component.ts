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
  pokemonChips: any[];
  pokemonMoves: any[];
  pokemonAbilities: any[];  

  constructor(private pokemonService: PokemonDataService) {}
  
  generateId(a, b) {
    var result = Math.floor(Math.random() * (b - a + 1)) + a;
    this.randomNumber = result;

    this.pokemonId = `#${this.randomNumber.toString().padStart(3, "0")}`;
  }

  ngOnInit(): void {
    this.getPokemonDataById();
    this.getAllPokemon();
  }

  getAllPokemon(){
    this.pokemonService.getAllPokemon()
    .subscribe(data => {
      console.log(data);
    })
  }

  getPokemonDataById(){
    this.generateId(1,151);
    this.pokemonService.getPokemonDataById(this.randomNumber)
    .pipe(finalize(() => {this.isLoading = false} ))
    .subscribe(
      (data) => {
        this.pokemonName = data.name;
        this.pokemonImg = data.sprites.other.dream_world.front_default;
        this.pokemonChips = data.types;
        this.pokemonMoves = data.moves.slice(0,4);
        this.pokemonAbilities = data.abilities.slice(0,4);
      },
      (error) => {
        console.log("deu ruim", error);
      }
    )
  }
}
