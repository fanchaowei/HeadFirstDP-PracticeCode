// 调料
import { Beverage } from './IBeverage'
import { CondimentDecorator } from './ICondiment'

export class Mocha extends CondimentDecorator {
  beverage!: Beverage

  constructor(_b: Beverage) {
    super()
    this.beverage = _b
  }
  public getDescription(): string {
    return this.beverage.getDescription() + ', Mocha'
  }
  public cost(): number {
    return 0.2 + this.beverage.cost()
  }
}

export class Whip extends CondimentDecorator {
  beverage!: Beverage

  constructor(_b: Beverage) {
    super()
    this.beverage = _b
  }
  public getDescription(): string {
    return this.beverage.getDescription() + ', Whip'
  }
  public cost(): number {
    return 0.1 + this.beverage.cost()
  }
}

export class Soy extends CondimentDecorator {
  beverage!: Beverage

  constructor(_b: Beverage) {
    super()
    this.beverage = _b
  }
  public getDescription(): string {
    return this.beverage.getDescription() + ', Soy'
  }
  public cost(): number {
    return 0.15 + this.beverage.cost()
  }
}
