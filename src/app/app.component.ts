import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string
  tableHead: string[]
  tableCell: object[]

  constructor(private _service: PokemonService) {
    this.title = 'Angular Mini Project'
    this.tableHead = ["Name", "Number", "Type(s)"]
    this.tableCell = [{}]
  }
  ngOnInit() {
    this.getPokemonFromService()
  }

  getPokemonFromService() {
    let pokemon = this._service.getPokemon()
    this.tableCell = pokemon
  }
}
