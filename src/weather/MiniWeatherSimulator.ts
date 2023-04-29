import { CurrentConditionsDisplay } from './NoticeBoard'
import { WeatherData } from './WeatherData'

let weatherData: WeatherData = new WeatherData()
let currentDisplay = new CurrentConditionsDisplay(weatherData)
weatherData.setMeasurements(80, 65, 30.4)
