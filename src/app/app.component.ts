import { Component } from '@angular/core';
import {PokemonService} from "./services/pokemonService";
import {Pokemon} from "./models/pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly pokemonService: PokemonService = new PokemonService()

  isDescending = true;
  allTypes: string[] = this.pokemonService.getAllTypes()
  filter: string = "";
  page: number = 0

  get array() {
    return this.pokemonService.getCountOfPages(this.filter)
  }

  get pokemons(): Pokemon[] {
    return this.pokemonService.getTypes(this.filter, this.page, this.isDescending)
  }

  public setTypes(type: string) {
    this.filter = type;
  }


}
