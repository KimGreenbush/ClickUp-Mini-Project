import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import {Pokemon } from "./pokemon.model"

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("Error occurred", error.error)
    } else {
      console.error("Status: ", error.status, " Error: ", error.error)
    }
    return throwError("Try again.")
  }

  getPokemon() {
    const pokemon: Pokemon[] = []
    for (let p = 1; p <= 151; p++) {
      // I needed to subscribe in the service rather than hand back the observable because in order to get multiple pokemon with their properties, I needed to make multiple requests and format them before returning a single collection to the component.
      const subscription = this._http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${p}`)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
        .subscribe(poke => {
          pokemon.push({
            name: poke.name,
            id: poke.id,
            types: poke.types
          })
        })
      setTimeout(() => subscription.unsubscribe(), 1000)
    }
    return pokemon
  }
}
