/*

GeeksForGeeks link: https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/

Input: {5, 6, 1, 2, 3, 4}
Output: 1

It will not handle duplicates
*/

function getMinimumElement(arr, low, high){
 
 if(low > high) return arr[0];
 
 if(high === low) return arr[low];

 let mid = parseInt(low + high)/2;
 
 if(mid < high && arr[mid+1] < arr[mid]) {
  return mid+1;
 
 if(mid > low && arr[mid] < arr[mid -1]){
  return mid;
 }
 
 if(arr[mid] < arr[high]) {
  getMinimum(arr, low, mid-1);
 } else {
  getMinimum(arr, mid + 1, high);
 }

}


console.log(getMinimumElement([5, 6, 1, 2, 3, 4], 0, arr.length -1));
