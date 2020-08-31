// Polyfill for filter

Array.prototype.filter = function(callback){
    let result = [];

    for(let i=0; i< this.length; i++){
        if(callback(this[i], i)){
            result.push(this[i]);
        }
    }

    return result;
}

var arr = [1,2,3,4,5];

console.log(arr.filter((ele) => ele == 2));