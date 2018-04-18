import {FarmingType} from './farming-type.enum';
import {Expendable} from '../expendable';

export class Farming implements Expendable{
  private _type: FarmingType;
  get type(): FarmingType {
    return this._type;
  }

  set type(value: FarmingType) {
    this._type = value;
  }
}
