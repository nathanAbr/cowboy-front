import {Expendable} from '../expendable';

export class Field {
  private _size: number;
  private _name: string;
  private _expendable: Expendable;

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get expendable(): Expendable {
    return this._expendable;
  }

  set expendable(value: Expendable) {
    this._expendable = value;
  }
}
