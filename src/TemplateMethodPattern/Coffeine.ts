export abstract class CaffeineBeverage {
  prepareRecipe() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if (this.customerWantsCondiments()) {
      this.addCondiments()
    }
  }

  abstract brew(): void
  abstract addCondiments(): void

  boilWater() {
    console.log(`Boiling water`)
  }

  pourInCup() {
    console.log(`Pouring into cup`)
  }
  // 提供了一个 hook，子类可以通过覆盖它来实现加不加调料的功能
  customerWantsCondiments() {
    return true
  }
}
