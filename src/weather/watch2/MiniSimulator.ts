import { CurrentConditionsDisplay } from './CurrentConditionsDisplay'
import { WeatherData } from './WeatherData'

let weatherData: WeatherData = new WeatherData()
let currentDisplay = new CurrentConditionsDisplay(weatherData)
weatherData.setMeasurements(82, 67, 30.4)
