// 主题
export interface Subject {
  registerObserver(o: Observer): void
  removeObserver(o: Observer): void
}
// 观察者
export interface Observer {
  update(temp: number, humidity: number, pressure: number): void
}
// 显示
export interface DisplayElement {
  // 显示接口
  display(): void
}
