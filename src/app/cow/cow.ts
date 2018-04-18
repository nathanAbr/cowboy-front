import {CowType} from './cow-type.enum';
import {Expendable} from '../expendable';

export class Cow implements Expendable{
  private _birthday: Date;
  private _name: string;
  private _pregnant_number: number;
  private _dried: boolean;
  private _type: CowType;
  private _number: number;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get pregnant_number(): number {
    return this._pregnant_number;
  }

  set pregnant_number(value: number) {
    this._pregnant_number = value;
  }

  get dried(): boolean {
    return this._dried;
  }

  set dried(value: boolean) {
    this._dried = value;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(value: Date) {
    this._birthday = value;
  }

  get type(): CowType {
    return this._type;
  }

  set type(value: CowType) {
    this._type = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }
}
