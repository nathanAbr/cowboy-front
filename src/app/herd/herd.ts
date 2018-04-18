import {Expendable} from '../expendable';
import {Cow} from '../cow/cow';

export class Herd implements Expendable{
  private _name: string;
  private _cows: Cow[];
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get cows(): Cow[] {
    return this._cows;
  }

  set cows(value: Cow[]) {
    this._cows = value;
  }
}
