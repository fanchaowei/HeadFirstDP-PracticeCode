import { CaffeineBeverage } from './Coffeine'

// // 整合前
// export class Coffee {
//   boilWater() {
//     console.log(`boil water...`)
//   }

//   brewCoffeeGrinds() {
//     console.log(`brew coffee grinds...`)
//   }

//   pourInCup() {
//     console.log(`pour in cup...`)
//   }

//   addSugarAndMilk() {
//     console.log(`add sugar and milk...`)
//   }

//   prepareRecipe() {
//     this.boilWater()
//     this.brewCoffeeGrinds()
//     this.pourInCup()
//     this.addSugarAndMilk()
//   }
// }

export class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log(`dripping coffee through filter`)
  }
  addCondiments(): void {
    console.log(`adding sugar and milk`)
  }
}
