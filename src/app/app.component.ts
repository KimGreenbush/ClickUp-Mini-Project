import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from "./pokemon.model"
import { Sort } from "@angular/material/sort"
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: string
  tableCol: string[]
  tableCell: Pokemon[]
  sortedPokemon: Pokemon[]

  constructor(private _service: PokemonService) {
    this.title = 'Gotta Catch\'em All!'
    this.tableCol = ["Number", "Name", "Type"]
    this.tableCell = this.getPokemonFromService()
    this.sortedPokemon = this.tableCell
  }

  sortPokemon(sort: Sort) {
    const pokes = this.tableCell.slice()
    if (!sort.active || sort.direction == "") {
      this.sortedPokemon = pokes
      return
    }

    this.sortedPokemon = pokes.sort((a, b) => {
      const isAsc = sort.direction === "asc"
      switch (sort.active) {
        case "Number" : return compare(a.id, b.id, isAsc)
        case "Name" : return compare(a.name, b.name, isAsc)
        case "Type" : return compare(a.types[0].type.name, b.types[0].type.name, isAsc)
        default: return 0
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tableCol, event.previousIndex, event.currentIndex)
  }

  getPokemonFromService() {
    return this._service.getPokemon()
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}