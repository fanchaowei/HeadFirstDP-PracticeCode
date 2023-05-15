import { LightCommand } from './Command'
import { SimpleRemoteControll } from './Control'
import { Light } from './Light'

let remote = new SimpleRemoteControll()
let lightCommand = new LightCommand(new Light())
remote.setCommand(lightCommand)
remote.buttonWasPressed()
