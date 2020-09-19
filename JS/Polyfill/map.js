 // Polyfill for map

Array.prototype.map = function(callback){
    let result = [];
    for(let i = 0; i< this.length; i++){
        result.push(callback(this[i], i, this));
    }

    return result;
}

var arr = [1,2,3,4,5];
console.log(arr.map(el => el*2));