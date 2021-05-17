/**
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 * 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
 * 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
 * 
 * 
 * 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 针对二叉树的情况，只遍历一次，
 * 当然也可以对x，y分别遍历，然后拿出深度和parent进行比较
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
  let queue = [root.left, root.right]
  while (queue.length > 0) {
     let length =  queue.length
     let array = []
     for(let i = 0; i < length; i++) {
         if (queue[i] && (queue[i].left || queue[i].right)) {
              queue.push(queue[i].left && Object.assign(queue[i].left, {parent: queue[i].val}))
              queue.push(queue[i].right && Object.assign(queue[i].right, {parent: queue[i].val}))
         }
         if (queue[i] && (queue[i].val == x || queue[i].val == y)) {
             array.push(queue[i])
         }
         if (array.length == 2 && (array[0].parent !== array[1].parent)) return true
         queue.shift()
         i--
         length--
         
     }
  }
  return false
}
