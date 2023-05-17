import { Observer } from './Observer'
// 主题的超类
export class Observable {
  private observers: Observer[] = []
  private isChanged: boolean = false
  // 注册观察者
  addObserver(observer: Observer) {
    this.observers.push(observer)
  }
  // 删除观察者
  deleteObserver(observer: Observer) {
    const index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }
  // 通知观察者
  notifyObservers(args: object = {}) {
    if (!this.isChanged) return
    for (const o of this.observers) {
      o.update(this, args)
    }
    this.isChanged = false
  }
  // 标记是否已改变
  setChanged() {
    this.isChanged = true
  }
}
