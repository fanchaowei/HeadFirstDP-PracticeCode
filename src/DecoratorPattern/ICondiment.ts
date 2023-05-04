import { Beverage } from './IBeverage'

// CondimentDecorator is a subclass of Beverage
export abstract class CondimentDecorator extends Beverage {
  public getDescription(): string {
    return this.description
  }
}
