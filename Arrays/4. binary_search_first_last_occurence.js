/*

GeeksforGeeks link: https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/

var arr = [2, 4, 10, 10, 10, 18, 20]

Approach: calculate mid
            if mid === element, check for left array 

*/


var arr = [2, 4, 10, 10, 10, 18, 20];

function fistOccurence(arr, low, high, element) {
    let mid = Math.floor((low + high) / 2 );

    if(mid === 0 || (arr[mid] === element && arr[mid - 1] < element)) {
        return mid;
    } else if(element > arr[mid]) {
       return fistOccurence(arr, mid + 1 , high, element)
    } else {
       return fistOccurence(arr, low , mid -1, element)
    }

}



function lastOccurence(arr, low, high, element) {
    if(high >= low) {
    let mid = Math.floor((low + high) / 2 );

    if(mid === arr.length - 1 || (arr[mid] === element && arr[mid + 1] > element)) {
        return mid;
    } else if(element >= arr[mid]) {
       return lastOccurence(arr, mid + 1 , high, element)
    } else {
       return lastOccurence(arr, low , mid -1, element)
    }
   }

    return -1;
}

console.log(lastOccurence(arr, 0 , arr.length - 1, 10));
console.log(fistOccurence(arr, 0 , arr.length - 1, 10));
