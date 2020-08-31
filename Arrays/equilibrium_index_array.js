/*

Input: A[] = {-7, 1, 5, 2, -4, 3, 0}
Output: 3
3 is an equilibrium index, because:
A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

Input: A[] = {1, 2, 3}
Output: -1

Approach: 1. calculate the Sum of the array
          2. Check the left sum of the array
*/

var arr = [-7, 1, 5, 2, -4, 3, 0];

function getEquilibriumIndex(arr) {
    let sum = 0, leftSum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }

    for (let index = 0; index < arr.length; index++) {
        sum -= arr[index]; 
        
        if(sum === leftSum) {
            return index;
        }
        leftSum += arr[index];

    }

    return -1;

}