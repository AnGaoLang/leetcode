// 有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。
// 对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。
// 并返回一个包含给定查询 queries 所有结果的数组。

// 示例 1：

// 输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// 输出：[2,7,14,8] 
// 解释：
// 数组中元素的二进制表示形式是：
// 1 = 0001 
// 3 = 0011 
// 4 = 0100 
// 8 = 1000 
// 查询的 XOR 值为：
// [0,1] = 1 xor 3 = 2 
// [1,2] = 3 xor 4 = 7 
// [0,3] = 1 xor 3 xor 4 xor 8 = 14 
// [3,3] = 8

/**
 * 暴力破解
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
 var xorQueries = function(arr, queries) {
  let array = []
  for(let i = 0; i < queries.length; i++) {
      const start = queries[i][0]
      const end = queries[i][1]
      let result = 0
      for(let j = start; j <= end; j ++) {
          result ^= arr[j]            
      }
      array.push(result)
  }
  return array
};


// 前缀异或和数组,长度为arr.length + 1, xors[0] = 0
// xors[i] = arr[0]⊕……⊕arr[i-1]
// 当 left = 0 时，result = queries[0]⊕……⊕queries[right] = xors[i + 1]
// 当 left > 0 时，
// result = queries[left]⊕……⊕queries[right]
// = (queries[0]⊕……⊕queries[left - 1])⊕(queries[0]⊕……⊕queries[left - 1])⊕(queries[left]⊕……⊕queries[right])
// = (queries[0]⊕……⊕queries[left - 1])⊕(queries[0]⊕……⊕queries[right])
// = xors[left]⊕xors[right + 1]
// 上述计算用到了异或运算的结合律，以及异或运算的性质 x⊕x=0。
/**
 * 前缀异或和优化处理
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
 var xorQueries = function(arr, queries) {
  let xors = [0]
  for(let i = 0; i < arr.length; i++) {
    xors.push(xors[i] ^ arr[i])
  }
  
}