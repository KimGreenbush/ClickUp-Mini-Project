import { createAction, props } from "@ngrx/store"
import { Pokemon } from "../pokemon.model"

export const setPokemon = createAction(
    "[Pokemon/API] Set Pokemon",
    props<{ pokemon: Pokemon[] }>()
)