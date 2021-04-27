if(typeof Object.create != 'function) {
 Object.create = function(param) {
    var fn = function();
    fn.prototype = param;]
    return new fn();
  }
 }
