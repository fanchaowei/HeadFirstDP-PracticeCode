import { Light } from './types/Light'
import { ICommand } from './ICommand'

export class NoCommand implements ICommand {
  undo(): void {}
  execute(): void {}
}

export class LightOnCommand implements ICommand {
  light: Light
  constructor(_light: Light) {
    this.light = _light
  }
  undo(): void {
    this.light.off()
  }

  execute(): void {
    this.light.on()
  }
}

export class LightOffCommand implements ICommand {
  light: Light
  constructor(_light: Light) {
    this.light = _light
  }
  undo(): void {
    this.light.on()
  }

  execute(): void {
    this.light.off()
  }
}
