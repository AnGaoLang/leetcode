
/**
 *
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
 * Front: 从队首获取元素。如果队列为空，返回 -1 。
 * Rear: 获取队尾元素。如果队列为空，返回 -1 。
 * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
 * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
 * isEmpty(): 检查循环队列是否为空。
 * isFull(): 检查循环队列是否已满。
 * @class CircleQueue
 */


 class CircularQueue {
  array = []
  start = -1
  end = -1
  length = 0

  constructor(length) {
    this.array = new Array(length)
    this.length = length
  }

  enQueue(value) {
    if (this.isFull()) return false
    // 如果为空，则移动start到0
    if (this.isEmpty()) this.start = 0
    // 循环移动end
    // this.end = (this.end + 1) == this.length ? 0 : (this.end + 1)
    this.end = (this.end + 1) % this.length
    this.array[this.end] = value
    return true
  }

  deQueue() {
    if (this.isEmpty()) return false
    // 只有一个元素的情况
    if (this.start == this.end) {
      this.start = -1
      this.end = -1
    } else {
      // 循环移动start
      // this.start = (this.start + 1 == this.length) ? 0 : (this.start + 1)
      this.start = (this.start + 1) % this.length
    }
    return true
  }

  Front() {
    if (this.isEmpty()) return -1
    return this.array[this.start]
  }

  Rear() {
    if (this.isEmpty()) return -1
    return this.array[this.end]
  }

  isEmpty() {
    return this.start == -1
  }

  isFull() {
    return this.start == (this.end + 1) % this.length
    return this.end == (this.start == 0 ? (this.length - 1) : (this.start - 1))
  }
}


// 0 1 2 3 4 5
// 1 2 3 4 5 0
// 2 3 4 5 0 1
// 3 4 5 0 1 2
// 4 5 0 1 2 3
// 5 0 1 2 3 4
// 0 1 2 3 4 5