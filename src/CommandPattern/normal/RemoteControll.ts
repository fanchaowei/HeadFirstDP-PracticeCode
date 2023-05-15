import { NoCommand } from './Command'
import { ICommand } from './ICommand'

export class RemoteControl {
  onCommands!: ICommand[]
  offCommands!: ICommand[]
  undoCommand!: ICommand

  constructor() {
    let noCommand = new NoCommand()
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand
      this.offCommands[i] = noCommand
    }
    this.undoCommand = noCommand
  }

  setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }
  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }

  undoButtonWasPushed() {
    this.undoCommand.undo()
  }
}
