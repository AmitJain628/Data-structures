/*

Array -> [1, 2, 8, 10, 10, 12, 19]
i/p-> 0    o/p -> floor = -1 ciel = 1
i/p-> 1    o/p -> floor = 1 ciel = 1 
i/p -> 5   o/p -> floor =2 ciel = 8
Approach: floor:
                 1. a[0] > x -> -1
                 2. a[0] === x -> 1
                 3. i = 1 to a[i] < x
         ciel:
                1. a[len] < x -> -1
                2. a[i] >== x ->  

*/

function findCiel(arr, low, high, x) {
    if(arr[low] > x) {
       return low;
    }

    if(arr[high] < x) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if(arr[mid] === x) {
        return mid;
    } else if(arr[mid] < x ) {
        if(arr[mid + 1] >=x) {
            return mid+1;
        } else {
         return findCiel(arr, mid + 1, high, x);
        }
    } else {
        if(arr[mid -1] <=x) {
            return mid-1;
        } else {
          return findCiel(arr, low, mid-1, x);
        }
    } 
}
let arr = [1, 2, 8, 10, 10, 12, 19];
console.log(findCiel(arr, 0 , arr.length-1, 5));