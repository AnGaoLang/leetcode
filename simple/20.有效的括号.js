/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 示例 1： 输入：s = "()"      输出：true
 * 示例 2： 输入：s = "()[]{}"  输出：true
 * 示例 3： 输入：s = "(]"      输出：false
 * 示例 4： 输入：s = "([)]"    输出：false
 * 示例 5： 输入：s = "{[]}"    输出：true
 * 
 */

/**
 * 使用栈进行处理
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (!s || s.length % 2) return false
  const arr = s.split('')
  const left = ['(', '[', '{']
  const right = {
      ')': '(',
      ']': '[',
      '}': '{'
  }
  const stack = []
  let result = false
  for (let i = 0; i < arr.length; i++) {
      if (left.includes(arr[i])) {
          stack.push(arr[i])
          result = false
      } else {
          result = stack.pop() == right[arr[i]]
          if (!result) return false
      }
  }
  return stack.length == 0  && result
};

// 直接成对的替换括号即可，最后为空便为真
var isValid = function(s) {
  while (s.includes('{}') || s.includes('()') || s.includes('[]')) {
    s = s.replace('{}', '')
    s = s.replace('[]', '')
    s = s.replace('()', '')
  }
  return s == ''
}
