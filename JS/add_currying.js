function add() {
 let args = Array.prototype.slice.call(arguments);
  
  function result(){
    args = args.concat(Array.prototype.slice.call(arguments));
    if(args.length >= 3) {
       return args.slice(0,3).reduce((a,b) => a+b, 0); 
    }
    
    return result;
  }
  result();
}


function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        return fn.apply(this, args.concat(
                Array.prototype.slice.call(arguments, 0)
        ));
    }
}

function add() {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
}

var curry1 = curry(add, 1);
console.log(
        curry1(2), // Logs 3
        curry1(2, 3), // Logs 6
        curry1(4, 5, 6) // Logs 16
);
