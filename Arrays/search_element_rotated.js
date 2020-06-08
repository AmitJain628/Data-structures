/*
Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
         key = 3
Output : Found at index 8

Input : arr[] = {30, 40, 50, 10, 20}
        key = 10   
Output : Found at index 3


Approach: 1. find pivot element -> next element is smaller than it
             1. mid = 2  
*/


let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let low = 0;
let high = arr.length - 1;

function getElement(arr, search, low, high) {
  

    while(low <= high) {
        let mid = Math.floor((low + high)/2);

        if(arr[mid] === search) {
            return mid;
        } else if(arr[mid] > arr[low]) {
            if(arr[low] <= search && arr[mid] >= search){
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if(search >= arr[mid] && search <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }
      }
        return -1;
    }

    console.log(getElement(arr, 9, low, high));