import { FlyBehavior } from './FlyWithWings'
import { QuackBehavior } from './QuackBehavior'

export abstract class Duck {
  flyBehavior!: FlyBehavior
  quackBehavior!: QuackBehavior

  public Duck() {}

  public abstract display(): void

  public performFly(): void {
    this.flyBehavior.fly()
  }

  public performQuack(): void {
    this.quackBehavior.quack()
  }

  // 修改行为
  setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb
  }
  setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb
  }
}
