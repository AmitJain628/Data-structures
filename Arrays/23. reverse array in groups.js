/*

Link: https://www.geeksforgeeks.org/reverse-an-array-in-groups-of-given-size/

Input:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
k = 3
Output:
[3, 2, 1, 6, 5, 4, 9, 8, 7]

Input:
arr = [1, 2, 3, 4, 5, 6, 7, 8]
k = 5
Output:
[5, 4, 3, 2, 1, 8, 7, 6]
*/


function reverseArrayInGroups(arr, k) {
 for(let i=0; i<arr.length; i += k) {
  let left = i;
  let right = Math.min(i + (k-1), arr.length -1);
  
  while(left < right){
   swap(arr, arr[left++], arr[right--])
  }
 }
}
