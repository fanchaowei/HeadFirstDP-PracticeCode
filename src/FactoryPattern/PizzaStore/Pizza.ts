import {
  Cheese,
  Clams,
  Dough,
  Pepperoni,
  PizzaIngredientFactory,
  Sauce,
  Veggies,
} from './IPizzaIngredientFactory'

export abstract class Pizza {
  name!: string
  dough!: Dough
  sauce!: Sauce
  veggies!: Veggies[]
  cheese!: Cheese
  pepperoni!: Pepperoni
  clam!: Clams

  abstract prepare(): void

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

  box() {
    console.log(`Place pizza in official PizzaStore box`)
  }
  cut() {
    console.log(`Cutting the pizza into diagonal slices`)
  }
  bake() {
    console.log(`Bake for 25 minutes at 350`)
  }
}
export class CheesePizza extends Pizza {
  ingredientFactory!: PizzaIngredientFactory

  constructor(_ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = _ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
  }
}
export class PepperoniPizza extends Pizza {
  prepare(): void {
    throw new Error('Method not implemented.')
  }
}
export class ClamPizza extends Pizza {
  ingredientFactory!: PizzaIngredientFactory
  constructor(_ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = _ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.clam = this.ingredientFactory.createClam()
  }
}
export class VeggiePizza extends Pizza {
  prepare(): void {
    throw new Error('Method not implemented.')
  }
}

export class NYStyleCheesePizza extends Pizza {
  prepare(): void {
    throw new Error('Method not implemented.')
  }
  constructor() {
    super()
    this.name = 'NY Style Sauce and Cheese Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  prepare(): void {
    throw new Error('Method not implemented.')
  }
  constructor() {
    super()
    this.name = 'Chicago Style Deep Dish Cheese Pizza'
    this.dough = 'Extra Thick Crust Dough'
    this.sauce = 'Plum Tomato Sauce'
  }

  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}
