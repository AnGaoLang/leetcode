class CircleQueue {
  array = []
  start = -1
  end = -1
  length = 0

  constructor(length) {
    this.array = new Array(length)
    this.length = length
  }

  enQueue(value) {

  }
  deQueue() {}

  Front() {
    if (this.isEmpty()) return -1
    return this.array[this.start]
  }

  Rear() {
    if (this.isEmpty()) return -1
    return this.array[this.end]
  }

  isEmpty() {}
  isFull() {}
}