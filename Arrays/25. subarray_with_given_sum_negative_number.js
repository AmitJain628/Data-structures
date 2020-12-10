// https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/
// Input: arr[] = {10, 2, -2, -20, 10}, sum = -10
// Output: Sum found between indexes 0 to 3

let arr = [10, 2, -2, -20, 10];
let sum = -10;

function getSubArrayWithSum(arr, k){
    let map={}, sum =0;
    let found = false;

    for(let i =0; i< arr.length; i++){
          sum += arr[i];
          map[sum] = i
    }

    for (const key in map) {
        if (object.hasOwnProperty(key)) {
            if(key ===k || (k-key) in map){
                found = true;
                break;
            }
        }
    }

    return found;
}
