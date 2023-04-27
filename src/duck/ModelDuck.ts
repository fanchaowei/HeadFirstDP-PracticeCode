import { Duck } from './Duck'
import { FlyNoWay } from './FlyWithWings'
import { Quack } from './QuackBehavior'

export class ModelDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyNoWay()
    this.quackBehavior = new Quack()
  }
  public display(): void {
    console.log(`this is ModelDuck`)
  }
}
