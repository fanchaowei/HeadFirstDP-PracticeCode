import { Light } from '../Simple/Light'
import { LightOffCommand, LightOnCommand } from './Command'
import { RemoteControl } from './RemoteControll'
;(function () {
  let remoteControl = new RemoteControl()

  let light = new Light()

  let lightOn = new LightOnCommand(light)
  let lightOff = new LightOffCommand(light)

  remoteControl.setCommand(0, lightOn, lightOff)
})()
