import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../models/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  urlLimit = environment.urlLimit;
  baseUrl = environment.baseUrl;
  dbPikachu = "http://localhost:3000/pikachu"

  constructor(private http: HttpClient) { }

  getAllPokemon(){
    return this.http.get<any>(`${this.urlLimit}`)
  }

  getPokemonById(id: number){
    const url: string =`${this.baseUrl}/${id}`;
    console.log(url);
    return this.http.get<any>(url)
  }
  
}
