import { ChicagoPizzaStore, NYPizzaStore, PizzaStore } from './PizzaStore'

let nyStore: PizzaStore = new NYPizzaStore()
let chicagoStore: PizzaStore = new ChicagoPizzaStore()

let pizza = nyStore.orderPizza('cheese')
console.log(`Ethan ordered a ${pizza?.getName()}\n`)
let pizza2 = chicagoStore.orderPizza('cheese')
console.log(`Joel ordered a ${pizza2?.getName()}\n`)
