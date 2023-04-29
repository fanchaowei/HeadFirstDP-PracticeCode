import { Observable } from './Observable'

export class WeatherData extends Observable {
  private temperature: number = 0
  private humidity: number = 0
  private pressure: number = 0

  measurementsChanged(): void {
    this.setChanged()
    this.notifyObservers()
  }

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

  // 更新
  getTemperature(): number {
    return this.temperature
  }
  getHumidity(): number {
    return this.humidity
  }
  getPressure(): number {
    return this.pressure
  }
}
