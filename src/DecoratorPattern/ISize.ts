import { Beverage } from './IBeverage'

export abstract class ISize extends Beverage {
  public getDescription() {
    return this.description
  }
}
