import {
  Cheese,
  Clams,
  Dough,
  Pepperoni,
  PizzaIngredientFactory,
  Sauce,
  Veggies,
} from './IPizzaIngredientFactory'

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough()
  }
  createSauce(): Sauce {
    return new MarinaraSauce()
  }
  createCheese(): Cheese {
    return new ReggianoCheese()
  }
  createVeggies(): Veggies[] {
    return new Array(new Garlic(), new Onion(), new Mushroom(), new RedPepper())
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }
  createClam(): Clams {
    return new FreshClams()
  }
}

export class ThinCrustDough extends Dough {}
export class MarinaraSauce extends Sauce {}
export class ReggianoCheese extends Cheese {}
export class Garlic extends Veggies {}
export class Onion extends Veggies {}
export class Mushroom extends Veggies {}
export class RedPepper extends Veggies {}
export class SlicedPepperoni extends Pepperoni {}
export class FreshClams extends Clams {}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough()
  }
  createSauce(): Sauce {
    return new PlumTomatoSauce()
  }
  createCheese(): Cheese {
    return new MozzarellaCheese()
  }
  createVeggies(): Veggies[] {
    return new Array(new Spinach(), new Eggplant(), new BlackOlives())
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }
  createClam(): Clams {
    return new FrozenClams()
  }
}

export class ThickCrustDough extends Dough {}
export class PlumTomatoSauce extends Sauce {}
export class MozzarellaCheese extends Cheese {}
export class Spinach extends Veggies {}
export class Eggplant extends Veggies {}
export class BlackOlives extends Veggies {}
export class FrozenClams extends Clams {}
