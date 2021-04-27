if(typeof Object.create != 'function) {
 Object.create = function(param, props) {
    var fn = function();
    fn.prototype = param;
    let result =  new fn();
    
    if(typeof props == 'Object'){
       if (props.hasOwnProperty((prop))) {
        result[prop] = props[prop].value;
      }
    }
    
    return result;
  }
 }
