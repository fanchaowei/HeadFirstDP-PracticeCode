import {
  CheesePizza,
  ClamPizza,
  PepperoniPizza,
  Pizza,
  VeggiePizza,
} from './Pizza'

enum PizzaType {
  CHEESE = 'cheese',
  PEPPERONI = 'pepperoni',
  CLAM = 'clam',
  VEGGIE = 'veggie',
}

// export class SimplePizzaFactory {
//   createPizza(type: string): Pizza | null {
//     let pizza: Pizza | null

//     if (type.includes(PizzaType.CHEESE)) {
//       pizza = new CheesePizza()
//     } else if (type.includes(PizzaType.PEPPERONI)) {
//       pizza = new PepperoniPizza()
//     } else if (type.includes(PizzaType.CLAM)) {
//       pizza = new ClamPizza()
//     } else if (type.includes(PizzaType.VEGGIE)) {
//       pizza = new VeggiePizza()
//     } else {
//       pizza = null
//     }
//     return pizza
//   }
// }
