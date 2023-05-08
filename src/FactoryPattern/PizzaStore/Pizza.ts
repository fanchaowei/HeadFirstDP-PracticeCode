export abstract class Pizza {
  name: string = ''
  dough: string = ''
  sauce: string = ''
  toppings: string[] = []

  getName(): string {
    return this.name
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    console.log('Tossing dough...')
    console.log('Adding sauce...')
    console.log('Adding toppings: ')
    this.toppings.forEach((topping) => console.log(`  ${topping}`))
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
export class CheesePizza extends Pizza {}
export class PepperoniPizza extends Pizza {}
export class ClamPizza extends Pizza {}
export class VeggiePizza extends Pizza {}

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'NY Style Sauce and Cheese Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'
    this.toppings.push('Grated Reggiano Cheese')
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'Chicago Style Deep Dish Cheese Pizza'
    this.dough = 'Extra Thick Crust Dough'
    this.sauce = 'Plum Tomato Sauce'
    this.toppings.push('Shredded Mozzarella Cheese')
  }

  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}
