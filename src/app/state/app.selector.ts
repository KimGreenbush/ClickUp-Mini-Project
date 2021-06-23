import {createSelector} from "@ngrx/store"
import { AppState } from "./app.state"
import { Pokemon } from "../pokemon.model"

export const selectPokemon = createSelector(
    (state: AppState) => state.allPokemon,
    (allPokemon: Pokemon[]) => allPokemon
)