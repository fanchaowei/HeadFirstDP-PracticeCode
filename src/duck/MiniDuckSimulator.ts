import { Duck } from './Duck'
import { FlyRocketPowered } from './FlyWithWings'
import { MallardDuck } from './MallardDuck'
import { ModelDuck } from './ModelDuck'

let mallard: Duck = new MallardDuck()
mallard.performFly()
mallard.performQuack()

console.log(`------------------------------------`)

let model = new ModelDuck()
model.performFly()
model.setFlyBehavior(new FlyRocketPowered())
model.performFly()
