import { Command } from './ICommand'

export class SimpleRemoteControll {
  slot!: Command

  constructor() {}

  setCommand(command: Command) {
    this.slot = command
  }

  buttonWasPressed() {
    this.slot.execute()
  }
}
