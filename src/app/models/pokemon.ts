import {Name} from "./name";
import {Base} from "./base";

export class Pokemon {
  readonly id: number = 0;
  readonly name: Name = new Name();
  readonly type: string[] = [];
  readonly base: Base = new Base()
}


