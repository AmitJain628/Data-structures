// Reduce polyfill


Array.prototype.reduce = function(callback, init) {

    if(typeof callback !== "function"){
        throw new TypeError(" not a function");
    }

    let result = init ? init : undefined;

    for(let i=0; i< this.length; i++){
        if(result){
            result = callback(result,this[i], i , this)
        } else {
            result = this[i];
        }
    }

    return result;

}