export class EventBus {
  private events: any
  constructor() {
    this.events = {}
  }

  // 订阅事件
  subscribe(event: string, callback: Function) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }

  // 发布事件
  publish(event: string, data: any) {
    if (!this.events[event]) {
      return []
    }
    this.events[event].forEach((c: Function) => c(data))
  }

  // 取消订阅
  unsubscribe(event: string, callback: Function) {
    if (!this.events[event]) {
      return []
    }
    this.events[event] = this.events[event].filter(
      (c: Function) => c !== callback
    )
  }
}

// 订阅事件
const callback1 = (data: string) => {
  console.log('Callback 1:', data)
}
const callback2 = (data: string) => {
  console.log('Callback 2:', data)
}

const eventBus = new EventBus()
eventBus.subscribe('event1', callback1)
eventBus.subscribe('event2', callback2)

// 发布事件
eventBus.publish('event1', 'Hello Event 1!') // 输出: Callback 1: Hello Event 1!
eventBus.publish('event2', 'Hello Event 2!') // 输出: Callback 2: Hello Event 2!

// 取消订阅事件
eventBus.unsubscribe('event1', callback1)

// 再次发布事件
eventBus.publish('event1', "This event won't trigger any callback.")
