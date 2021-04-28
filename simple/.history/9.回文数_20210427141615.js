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
var isPalindrome = function(x) {
  if (x < 0 || (x > Math.pow(2, 31) - 1) || x % 10 === 0) return false
  let reverse = 0
  while (reverse < x) {
    reverse = reverse * 10 + x % 10
    x = parseInt(x / 10)
  }
  return reverse === x || parseInt(reverse / 10) === x
}