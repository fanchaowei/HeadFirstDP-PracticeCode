import {
  CheesePizza,
  ClamPizza,
  PepperoniPizza,
  Pizza,
  VeggiePizza,
} from './Pizza'

export class SimplePizzaFactory {
  createPizza(type: string): Pizza | null {
    let pizza: Pizza | null

    if (type.includes('cheese')) {
      pizza = new CheesePizza()
    } else if (type.includes('pepperoni')) {
      pizza = new PepperoniPizza()
    } else if (type.includes('clam')) {
      pizza = new ClamPizza()
    } else if (type.includes('veggie')) {
      pizza = new VeggiePizza()
    } else {
      pizza = null
    }

    return pizza
  }
}
