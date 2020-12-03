/*

Solution: https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/

*/

function solution(A) {
    // move all negative to start
    let startIndex = moveNegative(A);
    
    return missingNumber(A, startIndex);
    
}


function missingNumber(arr, startIndex){
    if(arr.length && arr[0] > 0){
    for(let i=0; i< arr.length; i++){
        let j = startIndex - 1;
        if(arr[i]  > 0){
            if(typeof arr[arr[i] + j] !== "undefined" && arr[arr[i] +j] > 0){
              arr[arr[i] + j] = -arr[arr[i] +j];   
            }
        }
    }
    
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > 0){
            return i + 1;
        }
     }
    
     return arr.length + 1;
    }
    
     return 1;
 
    
}

function moveNegative(arr){
    let j = 0;
    for(let i =0; i < arr.length; i++){
         if(arr[i] < 0){
            swap(arr, i, j);
            i++;
         }
    }
    
    return j;
}

function swap(arr, i , j){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
 }
