import { WeatherData } from './WeatherData'
import { Observable } from './Observable'
import { Observer, DisplayElement } from './Observer'

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private observable!: Observable
  private temperature: number = 0
  private humidity: number = 0

  constructor(_ob: Observable) {
    this.observable = _ob
    _ob.addObserver(this)
  }

  update(obs: Observable, args: object): void {
    // 判断 obs 是否是 WeatherData 的实例
    if (obs instanceof WeatherData) {
      // 是的话，调用 WeatherData 的方法
      const wd = obs as WeatherData
      this.temperature = wd.getTemperature()
      this.humidity = wd.getHumidity()
      this.display()
    }
  }
  display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
    )
  }
}
