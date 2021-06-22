import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from "./pokemon.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string
  tableHead: string[]
  tableCell: Pokemon[]

  constructor(private _service: PokemonService) {
    this.title = 'Angular Mini Project'
    this.tableHead = ["Number", "Name", "Type(s)"]
    this.tableCell = []
  }
  ngOnInit() {
    this.getPokemonFromService()
  }

  getPokemonFromService() {
    let pokemon = this._service.getPokemon()
    this.tableCell = pokemon

  }
}