var optimize = {
  debounce: function(fn, wait) {

  },
  throttle: function() {
    var isClear = arguments[0], fn;
    if (typeof isClear === 'boolean') {
      fn = arguments[1];
      fn._throttleID && clearTimeout(fn._throttleID)
    } else {
      fn = isClear;
      param = arguments[1]
      var p = Object.assign({
        context: null,
        args: [],
        time: 300
      }, param);
      arguments.callee(true, fn);
      fn._throttleID = setTimeout(function() {
        fn.apply(p.context, p.args)
      }, p.time)
    }
  }
}
