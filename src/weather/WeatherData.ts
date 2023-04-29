import { Observer, Subject } from './types'

export class WeatherData implements Subject {
  private observers: Observer[] = []
  private temperature: number = 0
  private humidity: number = 0
  private pressure: number = 0

  // 注册
  registerObserver(o: Observer): void {
    this.observers.push(o)
  }
  // 移除
  removeObserver(o: Observer): void {
    const i = this.observers.indexOf(o)
    if (i >= 0) {
      this.observers.splice(i, 1)
    }
  }
  // 通知
  notifyObservers(): void {
    for (const ob of this.observers) {
      ob.update(this.temperature, this.humidity, this.pressure)
    }
  }
  // 更新
  measurementsChanged(): void {
    this.notifyObservers()
  }
  // 设置更新的值
  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }
}
