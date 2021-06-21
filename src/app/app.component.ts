import { Component, OnInit } from '@angular/core';
import { PokemonService, aPokemon } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string
  tableHead: string[]
  tableCell: aPokemon[]

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