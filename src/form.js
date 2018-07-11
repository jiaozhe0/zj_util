// email
const e = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
// 身份证号
var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;


const form = {
  // 去空白
  trim: function(val) {
    return val.replace(/^\s+|\s+$/g,"");
  }
}
