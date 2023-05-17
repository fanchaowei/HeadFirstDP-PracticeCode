import { CaffeineBeverage } from './Coffeine'

// 未整合前
// class Tea {
//   prepareRecipe(): void {
//     this.boilWater()
//     this.steepTeaBag()
//     this.pourInCup()
//     this.addLemon()
//   }
//   boilWater(): void {
//     console.log('Boiling water')
//   }
//   steepTeaBag(): void {
//     console.log('Steeping the tea')
//   }
//   addLemon(): void {
//     console.log('Adding Lemon')
//   }
//   pourInCup(): void {
//     console.log('Pouring into cup')
//   }
// }

export class Tea extends CaffeineBeverage {
  brew(): void {
    console.log(`steeping the tea`)
  }
  addCondiments(): void {
    console.log(`adding lemon`)
  }
}
