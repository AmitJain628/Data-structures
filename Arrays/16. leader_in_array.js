/*

i/p -> [16, 17, 4, 3, 5, 2]
p/p -> 17, 5, 2

Approach: start from right, track the max element

*/

function findLeader(arr){
    let max = Number.MIN_SAFE_INTEGER;
    let result = [];
    for (let index = arr.length - 1; index >= 0; index--) {
         if(arr[index] > max) {
             max = arr[index];
             result.push(arr[index]);
         }
    }

    return result;
}

console.log(findLeader([16, 17, 4, 3, 5, 2]))
