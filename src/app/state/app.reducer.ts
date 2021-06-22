import { Action, createReducer, on } from "@ngrx/store"
import { setPokemon } from "./app.actions"
import { Pokemon } from "../pokemon.model"

export const initialState: Pokemon[] = []

export const appReducer = createReducer(
    initialState,
    on(setPokemon,  (state, {pokemon}) => [...pokemon] )
)