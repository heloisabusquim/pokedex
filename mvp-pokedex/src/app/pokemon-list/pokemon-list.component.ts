import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor() { }
  
  generateId(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  // Função provisória, angular não está calculando quando o número inicia com 001 ou 056 - tratar esse esquema.

  ngOnInit(): void {
  }
}
