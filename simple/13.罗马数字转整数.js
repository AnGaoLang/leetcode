/**
 * 用正则替换的方式
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let obj = {
      'IV': 'A',
      'IX': 'B',
      'XL': 'G',
      'XC': 'H',
      'CD': 'E',
      'CM': 'F'
  }
  
  let total = 0
  Object.keys(obj).forEach(key => {
      s = s.replace(key, obj[key])
  })
  for(let i = 0; i < s.length; i++) {
      total += mapV(s[i])
  }
  return total
  
  function mapV(a) {
      let mapO = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000,
          'A': 4,
          'B': 9,
          'G': 40,
          'H': 90,
          'E': 400,
          'F': 900
      }
      return mapO[a]
  }
}


/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let obj = {
      'IV': 'A',
      'IX': 'B',
      'XL': 'G',
      'XC': 'H',
      'CD': 'E',
      'CM': 'F'
  }
  
  let total = 0
  Object.keys(obj).forEach(key => {
      s = s.replace(key, obj[key])
  })
  for(let i = 0; i < s.length; i++) {
      total += mapV(s[i])
  }
  return total
  
  function mapV(a) {
      let mapO = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000,
          'A': 4,
          'B': 9,
          'G': 40,
          'H': 90,
          'E': 400,
          'F': 900
      }
      return mapO[a]
  }
}
