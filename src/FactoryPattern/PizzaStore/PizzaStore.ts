import {
  ChicagoStyleCheesePizza,
  ClamPizza,
  NYStyleCheesePizza,
  PepperoniPizza,
  Pizza,
  VeggiePizza,
} from './Pizza'
import {
  ChicagoPizzaIngredientFactory,
  NYPizzaIngredientFactory,
} from './PizzaIngredientFactory'
// import { SimplePizzaFactory } from './PizzaFactory'

// export class PizzaStore {
//   simplePizzaFactory!: SimplePizzaFactory
//   constrocutor(_factory: SimplePizzaFactory) {
//     this.simplePizzaFactory = _factory
//   }

//   orderPizza(type: string): void {
//     const pizza = this.simplePizzaFactory.createPizza(type)

//     if (pizza) {
//       pizza.prepare()
//       pizza.bake()
//       pizza.cut()
//       pizza.box()
//     } else {
//       console.log(`Sorry, we don't have ${type} pizza`)
//     }
//   }
// }

export abstract class PizzaStore {
  // 将创建 pizza 的方法抽象，交由子类实现，提高了扩展性
  abstract createPizza(type: string): Pizza | null

  orderPizza(type: string) {
    const pizza = this.createPizza(type)

    if (pizza) {
      pizza.prepare()
      pizza.bake()
      pizza.cut()
      pizza.box()
      return pizza
    } else {
      return null
    }
  }
}

export class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    let pizza: Pizza | null

    if (type.includes('cheese')) {
      pizza = new NYStyleCheesePizza()
    } else if (type.includes('pepperoni')) {
      pizza = new PepperoniPizza()
    } else if (type.includes('clam')) {
      pizza = new ClamPizza(new NYPizzaIngredientFactory())
    } else if (type.includes('veggie')) {
      pizza = new VeggiePizza()
    } else {
      pizza = null
    }

    return pizza
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    let pizza: Pizza | null

    if (type.includes('cheese')) {
      pizza = new ChicagoStyleCheesePizza()
    } else if (type.includes('pepperoni')) {
      pizza = new PepperoniPizza()
    } else if (type.includes('clam')) {
      pizza = new ClamPizza(new ChicagoPizzaIngredientFactory())
    } else if (type.includes('veggie')) {
      pizza = new VeggiePizza()
    } else {
      pizza = null
    }

    return pizza
  }
}
