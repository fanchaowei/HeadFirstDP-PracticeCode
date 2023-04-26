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
}
