import {Pokemon} from "../models/pokemon";
import {pokemon} from "../models/pokedex";

export class PokemonService {
  private pokemons: Pokemon[] = pokemon
  private listOfPokemons: Pokemon[] = []
  readonly pageSize: number = 13




  public getCountOfPages(type: string = ''): number[] {
    let countOfPages: number[] = [];
    for (let i = 0; i < this.pokemons.filter(i => type == "" || i.type.includes(type)).length / this.pageSize; i++) {
      countOfPages.push(i)
    }
    console.log(countOfPages)
    return countOfPages
  }

  public getAllTypes(): string[] {
    return [...(new Set<string>( this.pokemons.map(value => value.type).flat()))].sort((o1, o2) => o1.localeCompare(o2));
  }



  sort(isDescending: boolean, arrOfPokemons: Pokemon[]): Pokemon[] {
    if (isDescending) return arrOfPokemons.sort((o1,o2) => o1.name.english.localeCompare(o2.name.english))
    else return arrOfPokemons.sort((o1,o2) => -o1.name.english.localeCompare(o2.name.english))
  }

  public getTypes(type: string, page: number, isDescending: boolean): Pokemon[] {
    this.listOfPokemons = []
    if (type == "") {
      for (let onePokemon of this.pokemons) {
        this.listOfPokemons.push(onePokemon)
      }
    } else {
      for (let onePokemon of this.pokemons) {
        for (let i = 0; i < onePokemon.type.length; i++) {
          if (onePokemon.type[i] == type) this.listOfPokemons.push(onePokemon)
        }
      }
    }
    return this.sort(isDescending, this.listOfPokemons).slice(page * this.pageSize, ((page + 1) * this.pageSize))
  }
}
