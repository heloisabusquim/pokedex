import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDataService } from './services/pokemon-data.service';
import { PokemonImageComponent } from './pokemon-image/pokemon-image.component';
import { PokemonChipsComponent } from './pokemon-chips/pokemon-chips.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonNavbarComponent } from './pokemon-navbar/pokemon-navbar.component';
import { RandomButtonComponent } from './random-button/random-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PokemonListComponent,
    PokemonImageComponent,
    PokemonChipsComponent,
    PokemonInfoComponent,
    PokemonNavbarComponent,
    RandomButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
