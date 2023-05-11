export class Singleton {
  private static uniqueInstance: Singleton
  private static isIns: boolean = false

  private constructor() {}

  public static getInstance() {
    if (!this.isIns) {
      if (!this.uniqueInstance) {
        this.uniqueInstance = new Singleton()
        this.isIns = true
      }
    }
    return this.uniqueInstance
  }
}
