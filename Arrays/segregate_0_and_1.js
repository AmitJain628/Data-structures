
/*
Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 

Approach: One pointer at starting point, and another pointer at end
          check for 0 or 1 if not present swap it
*/


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function segregate0And1(arr){
    let left=0;
    let right=arr.length-1; 
    while(left<= right){
    
        while(arr[left] === 0 && left < right) {
            left++;
        }
        while(arr[right] === 1 && left < right) {
            right--
        }

        if(left< right) {
            swap(arr, left, right); 
            left++;
            right-- 
       }
    }
}

let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
console.log(segregate0And1(arr));
console.log(arr);

//0, 1, 0, 1, 0, 0, 1, 1, 1, 0
//   i                        j
//0  0  0  1  0  0  1  1  1  1
//   i                       j
//          i     j
// 0  0  0  0  0  1  1 1   1  1
//           i     j