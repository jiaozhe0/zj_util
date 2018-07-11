var url = {
  // 获取url的某个参数
  getParam: function(url, param) {
    var url += "",
    result = url.match(new RegExp("/(\\?|\\&)" + param + "=([^\\&]+)/"));
    if(result && result[2]) {
      return decodeURIComponent(result[2])
    }
  },
  // 获取url
  getUrlPath: function(){
     var loc = window.location,  portStr = "";
     if(loc.port != 80){ portStr = ":"+loc.port; }
     return loc.protocol + "//" +loc.hostname + portStr;
  }
}
