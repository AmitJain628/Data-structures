/*
Input: arr[] = {4, 3, 7, 8, 6, 2, 1}
Output: arr[] = {3, 7, 4, 8, 2, 6, 1}

Approach: 4, 3, 7, 8, 6, 2, 1
          3, 7, 4, 8

*/


var arr = [4, 3, 7, 8, 6, 2, 1];

function swap(arr, i , j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
}

function getZigZagOrder(arr) {
    let flag = true;

    for (let i = 0; i < arr.length; i++) {
        
        if(flag) {
          if(arr[i] > arr[i+1]) {
              swap(arr, i, i + 1);
          }
        } else {
            if(arr[i] < arr[i+1]) {
              swap(arr, i, i + 1);
            }
        }
        flag = !flag;
    }

    return arr;
}

console.log(getZigZagOrder(arr));