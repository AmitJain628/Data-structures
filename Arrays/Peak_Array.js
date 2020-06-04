/*

i/p: [-10, -5, 0, 3, 7]
o/p: arr[3] =3

Approach: Use binary search
TimeComplexity: O(nlogn)
*/

function binarySearch(arr, low, high){
   if(high > low) {
    let mid = Math.floor((high + low) / 2);
    console.log(low, high, mid, arr[mid])
    if(arr[mid] === mid) {
        return mid;
    } else if(arr[mid] < mid) {
       return binarySearch(arr, mid+1, high)
    } else {
       return binarySearch(arr, low, mid-1)
    }
   } else {
     return -1;
   }
}

console.log(binarySearch([-10, -5, 0, 3, 7], 0, 4));