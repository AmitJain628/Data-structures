/*

arr -> 1, 5, 3, 19, 18, 25
o/p -> 1 (18 and 19)

arr -> 30, 5, 20, 9, 31
o/p -> 4 (5 and 9)

Approach: sort the array, and keep track of min diff

*/

function getMinDiff(arr) {
   const newArr = arr.sort((x, y) => x > y ? 1 : -1);
   let min = Number.MAX_SAFE_INTEGER;
   for (let index = 0; index < newArr.length; index++) {
       if(newArr[index + 1] - newArr[index] < min) {
           min = newArr[index + 1] - newArr[index]
       }       
   }
   return min;
}

console.log(getMinDiff([1, 5, 3, 19, 18, 25]));