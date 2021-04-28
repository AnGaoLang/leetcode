
/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。(利用数学方法)
 * 
 * 示例 2：
 * 输入：x = -123
 * 输出：-321
 *
 * @param {*} x
 * @return {number}
 */
 var reverse = function(x) {
  let result = 0 
  while(x !== 0) {
    result = result * 10 + x % 10
    x = parseInt(x / 10)
  }
  let max = Math.pow(2, 31);
  return result >= -max && result <= max - 1 ? result : 0;
}