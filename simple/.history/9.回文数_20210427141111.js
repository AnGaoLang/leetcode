
/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 * (利用数学方法)
 * 
 * 示例 2：
 * 输入：x = 121 / 1223221
 * 输出：true
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