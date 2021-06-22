import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PokemonService } from './pokemon.service';
import { StoreModule } from '@ngrx/store';
import { appReducer } from "./state/app.reducer"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({allPokemon: appReducer})
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
