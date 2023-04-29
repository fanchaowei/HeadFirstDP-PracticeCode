import { DisplayElement, Observer, Subject } from './types'
export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number = 0
  private humidity: number = 0
  private weatherData!: Subject

  constructor(_weatherData: Subject) {
    // 保存主题
    this.weatherData = _weatherData
    // 注册该观察者
    _weatherData.registerObserver(this)
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
    )
  }
  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp
    this.humidity = humidity
    this.display()
  }
}
