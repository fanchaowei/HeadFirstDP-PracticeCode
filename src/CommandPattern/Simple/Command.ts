import { GarageDoor } from './GarageDoor'
import { Command } from './ICommand'
import { Light } from './Light'

export class LightCommand implements Command {
  light: Light

  constructor(_light: Light) {
    this.light = _light
  }

  execute(): void {
    this.light.on()
  }
}

export class GarageDoorOpenCommand implements Command {
  garageDoor: GarageDoor
  constructor(_garageDoor: GarageDoor) {
    this.garageDoor = _garageDoor
  }
  execute(): void {
    this.garageDoor.up()
  }
}
