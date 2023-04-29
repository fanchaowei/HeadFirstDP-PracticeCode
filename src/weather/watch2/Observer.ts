import { Observable } from './Observable'

// 观察者
export interface Observer {
  update(observable: Observable, args: object): void
}
// 显示
export interface DisplayElement {
  // 显示接口
  display(): void
}
