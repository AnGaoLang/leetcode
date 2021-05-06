
/**
 *
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
 * Front: 从队首获取元素。如果队列为空，返回 -1 。
 * Rear: 获取队尾元素。如果队列为空，返回 -1 。
 * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
 * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
 * isEmpty(): 检查循环队列是否为空。
 * isFull(): 检查循环队列是否已满。
 * 
 * 0 1 2 3 4 5
 * 1 2 3 4 5 0
 * 2 3 4 5 0 1
 * 3 4 5 0 1 2
 * 4 5 0 1 2 3
 * 5 0 1 2 3 4
 * 0 1 2 3 4 5
 * 
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


/**
 * 广度遍历最短路径
 * 队列和广度优先遍历，利用先进先出的队列，层层遍历
 * @param {*} root 根节点，实际上就包含了整颗树或图，因为有层层嵌套的指针
 * @param {*} target
 */
const data = [
  {
      name: 'a',
      children: [
          { name: 'b', children: [{ name: 'e' }] },
          { name: 'c', children: [{ name: 'f' }] },
          { name: 'd', children: [{ name: 'g' }] },
      ],
  },
  {
      name: 'a2',
      children: [
          { name: 'b2', children: [{ name: 'e2' }] },
          { name: 'c2', children: [{ name: 'f2' }] },
          { name: 'd2', children: [{ name: 'g2' }] },
      ],
  }
];

function BreadthFirstSearch(root, target) {
  const queue = []
  // 可以新建一个哈希集确保不会访问一个节点2次，主要适用于遍历图
  // const used = new Set()
  let step = 0
  queue.push(...root)
  // used.push(...root)

  while(queue.length !== 0) {
    step++
     // 这里的缓存length是为了记住上一层遍历的长度
    let size = queue.length
    for(let i = 0; i < size; i++) {
      const curNode = queue[i]
      if (curNode.name == target) return step
      if (curNode.children) {
        // 可以在这里添加一层判断，确保在图的遍历中不会添加相同的节点
        // curNode.children.forEach(item => {
        //   if (!used.has(item)) {
        //     queue.push(item)
        //     used.push(item)
        //   }
        // })
        queue.push(...curNode.children)
      }
      // 这里的shift减小了length,会造成循环跳过一个元素
      queue.shift()
      size--
      i--
    }
  }
  return -1
}
