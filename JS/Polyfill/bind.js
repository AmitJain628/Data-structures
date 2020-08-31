// Polyfill for Bind

Function.prototype.bind = function(context){
    let fn = this;
    let args = Array.prototype.slice(arguments, 1);
    
    return function(){
        fn.apply(context, [...arguments, ...args])
    }
}


function a () {
    console.log(this);
}

var b = a.bind(this);