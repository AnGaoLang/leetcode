class MyStack {
  constructor() {
    this.array = []
    this.end = -1
    this.min = null
  }

  push(value) {
    this.end++
    this.array[this.end] = value
    return true
  }

  pop() {
    if (this.isEmpty()) return false
    this.array.splice(this.end, 1)
    this.end--
    return true
  }

  top() {
    if (this.isEmpty()) return false
    return this.array[this.end]
  }

  isEmpty() {
    return this.end == -1
  }
}

/**
 *
 * 单栈存储diff
 * @class MyMinStack
 */

/**
 *
 * 主体栈和最小值栈的双栈实现
 * @class MyMinStack
 */
class MyMinStack {
  constructor() {
    this.array = []
    this._minArray = []
  }

  push(value) {
    if (this.isEmpty()) {
      this._minArray.push(value)
    } else {
      let min = this._minArray[this._minArray.length - 1]
      if (value < min) {
        this._minArray.push(value)
      } else {
        this._minArray.push(min)
      }
      // 优化方法
      // let min = this._minArray[this._minArray.length - 1]
      // if (value <= min) {
      //   this._minArray.push(value)
      // }
    }
    this.array.push(value)
  }

  pop() {
    if (this.isEmpty()) return false
    this.array.pop()
    this._minArray.pop()

    // 优化方法
    // let val = this.array.pop()
    // let min = this._minArray[this._minArray.length - 1]
    // if (val <= min) {
    //   this._minArray.pop()
    // }
  }

  top() {
    if (this.isEmpty()) return false
    return this.array[this.array.length - 1]
  }

  isEmpty() {
    return this.array.length === 0
  }

  getMin() {
    if (this._minArray.length === 0) return false
    return this._minArray[this._minArray.length - 1]
  }
}

/**
 *
 * 辅助栈或链表实现
 * @class MyMinStack
 */
class MyMinStack {
  constructor() {
    this.array = []
  }

  push(value) {
    this.array.push({value: value, min: Math.min(value, this.getMin())})
  }

  pop() {
    if (this.isEmpty()) return false
    this.array.pop()
  }

  top() {
    if (this.isEmpty()) return false
    return this.array[this.array.length - 1].value
  }

  isEmpty() {
    return this.array.length === 0
  }

  getMin() {
    if (this.isEmpty()) return false
    return this.array[this.array.length - 1].min
  }
}


/**  ------------- ------------- */
const stack = new MyStack()
console.log(
stack.isEmpty(),
stack.push(1),
stack.push(2),
stack.push(3),
stack.pop(),
stack.push(4),
stack.push(5),
stack.top(),
stack.pop(),
stack.top(),
stack.pop(),
stack.top(),
stack.isEmpty(),
)

2 1 -2 3 
