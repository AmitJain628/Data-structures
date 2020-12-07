/* Promise all polyfill in Javascript


*/

Promise.prototype.all = function(arr){
 let results = [];
 
 return new Promise((resolve, reject) => {
   arr.forEach((promise) => {
     promise().then((response) => {
       results.push(response);
       if(results.length === arr.length) {
         resolve(results);
       }
     }).catch((error) => {
        reject(error);
     });
   });
 });
}
