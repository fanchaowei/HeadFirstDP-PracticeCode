import { Beverage } from './IBeverage'
import { ISize } from './ISize'

export class TallSize extends ISize {
  beverage!: Beverage
  constructor(_b: Beverage) {
    super()
    this.beverage = _b
    this.description = 'Tall Size'
  }

  public getDescription() {
    return this.beverage.getDescription() + ', ' + this.description
  }
  public cost(): number {
    return this.beverage.cost() + 0.1
  }
}

export class GrandeSize extends ISize {
  beverage!: Beverage
  constructor(_b: Beverage) {
    super()
    this.beverage = _b
    this.description = 'Grande Size'
  }

  public getDescription() {
    return this.beverage.getDescription() + ', ' + this.description
  }
  public cost(): number {
    return this.beverage.cost() + 0.15
  }
}

export class VentiSize extends ISize {
  beverage!: Beverage
  constructor(_b: Beverage) {
    super()
    this.beverage = _b
    this.description = 'Venti Size'
  }

  public getDescription() {
    return this.beverage.getDescription() + ', ' + this.description
  }
  public cost(): number {
    return this.beverage.cost() + 0.2
  }
}
