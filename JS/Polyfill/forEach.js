// Polyfill for forEach

Array.prototype.forEach = function(callback) {
    for(let i =0; i< this.length; i++){
        callback(this[i]);
    }
}


var arr = [1, 2, 3, 4, 5];
arr.forEach((element) => console.log(element));

