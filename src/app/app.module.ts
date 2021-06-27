import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PokemonService } from './pokemon.service';
import { StoreModule } from '@ngrx/store';
import { appReducer } from "./state/app.reducer";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({allPokemon: appReducer}),
    BrowserAnimationsModule,
    MatSortModule,
    DragDropModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
