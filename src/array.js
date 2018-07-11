const array = {
  // 数组去重
  unique: function(arr) {
     if (typeof window.Set === 'function') {
      return [...new Set(arr)]
     } else {
      var result = [], json = {};
      arr.forEach(function(item) {
        if (!result[item]) {
          json[item] = true
          result.push(item)
        }
      })
      return result
     }
  },
   // 查找最大数值
  max: function(arr) {
    return Math.max.apply(Math, arr)
  },

  // 数组扁平化
  flatten: function(arr) {
    while(arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr)
    }
    return arr
  },
  // 数组去重 filter + indexOf
  unique1: function(arr) {
    return arr.filter(function(item, index, array) {
       return array.indexOf(item) === index
    })
  },

 // es6
 max1: function(arr) {
  return Math.max(...arr)
 }

}
