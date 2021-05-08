
/**
 * 
 * 给你两个整数，n 和 start 。
 * 数组 nums 定义为：nums[i] = start + 2*i（下标从 0 开始）且 n == nums.length 。
 * 请返回 nums 中所有元素按位异或（XOR）后得到的结果。
 * 
 * 注意：这里的异或指的是按位异或，即二进制下的异或，同1或同0则为0，不同则为1
 * 
 * 
 * 示例 1：
 * 输入：n = 5, start = 0
 * 输出：8
 * 解释：数组 nums 为 [0, 2, 4, 6, 8]，其中 (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8 。
 * "^" 为按位异或 XOR 运算符。
 * 
 * 
 /**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let total
    for(let i = 0; i < n; i++) {
        if(i === 0) {
            total = start + 2 * i
        } else {
            total = total ^ (start + 2 * i)
        }
        // total ^= (start + 2 * i) // 任何数和0 ^ 都返回数本身
    }
    return total
};
