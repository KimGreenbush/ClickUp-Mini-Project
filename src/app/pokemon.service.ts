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
    let pokemon: Array<aPokemon> = []
    for (let p = 1; p <= 151; p++) {
      // I needed to subscribe in service rather than hand back the observable because in order to get multiple pokemon with their properties, I needed to make multiple requests and format them before returning them to the component.
      this._http.get<aPokemon>(`https://pokeapi.co/api/v2/pokemon/${p}`)
        .subscribe(poke => {
          pokemon.push({
            name: poke.name,
            id: poke.id,
            types: poke.types
          })
        })
    }
    return pokemon
  }
}
export interface aPokemon {
  name: string,
  id: number,
  types: [{ type: { name: string } }]
}