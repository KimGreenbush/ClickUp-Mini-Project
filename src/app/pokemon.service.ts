import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }

  getPokemon() {
    let pokes: object[] = []
    for (let p = 1; p <= 151; p++) {
      let pokemon = this._http.get<aPokemon>(`https://pokeapi.co/api/v2/pokemon/${p}`)
      pokemon.subscribe(poke => pokes.push(poke))
    }
    return pokes
  }
}
export interface aPokemon {
  results: []
}