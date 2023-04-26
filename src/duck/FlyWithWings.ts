export interface FlyBehavior {
  fly(): void
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log(`I'm flyIng!!!`)
  }
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log(`I can't fly`)
  }
}
