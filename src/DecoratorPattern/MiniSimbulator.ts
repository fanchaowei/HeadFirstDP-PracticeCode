import { Espresso, DarkRoast, HouseBlend } from './Beverages'
import { Mocha, Whip, Soy } from './Flavour'
import { Beverage } from './IBeverage'
import { GrandeSize, TallSize, VentiSize } from './Size'

let beverage: Beverage = new Espresso()
beverage = new TallSize(beverage)
console.log(`第一杯：` + beverage.getDescription() + ' $' + beverage.cost())

let bev2: Beverage = new DarkRoast()
bev2 = new Mocha(bev2)
bev2 = new Mocha(bev2)
bev2 = new Whip(bev2)
bev2 = new GrandeSize(bev2)
console.log(`第二杯：` + bev2.getDescription() + ' $' + bev2.cost())

let bev3: Beverage = new HouseBlend()
bev3 = new Soy(bev3)
bev3 = new Mocha(bev3)
bev3 = new Whip(bev3)
bev3 = new VentiSize(bev3)
console.log(`第三杯：` + bev3.getDescription() + ' $' + bev3.cost())
