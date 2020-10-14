// https://www.geeksforgeeks.org/return-a-pair-with-maximum-product-in-array-of-integers/

// Input: arr[] = {1, 4, 3, 6, 7, 0}  
// Output: {6,7}  
// Input: arr[] = {-1, -3, -4, 2, 0, -5} 
// Output: {-4,-5} 
// Solution: 1. traverse the array from left to rigth
//           2. find max postive and second postive
//           3. Find max negative and second negative
//           4. find the max product

let arr = [1, 4, 3, 6, 7, 0]

function maxProduct(arr) {

    let maxPos = Number.MIN_VALUE;
    let secondMaxPos = Number.MIN_VALUE;
    let maxNeg = Number.MAX_SAFE_INTEGER;
    let secondMaxNeg = Number.MAX_SAFE_INTEGER;

    for(let i=0; i< arr.length; i++){
        if(arr[i] > 0){
            console.log(arr[i]);
            if(arr[i] > maxPos){
                secondMaxPos = maxPos;
                maxPos = arr[i];
            } else if(arr[i] < maxPos && arr[i] > secondMaxPos){
                secondMaxPos = arr[i];
            }
        } else {
            console.log(arr[i], maxNeg, secondMaxNeg);
            if(arr[i] < maxNeg){
                secondMaxNeg = maxNeg;
                maxNeg = arr[i];
            } else if(arr[i] > maxNeg && arr[i] < secondMaxNeg){
                secondMaxNeg = arr[i];
            }
        }
    }

    console.log(maxPos, secondMaxPos,maxNeg, secondMaxNeg);

    return maxPos*secondMaxPos > maxNeg * secondMaxNeg ? `${maxPos}, ${secondMaxPos}` : `${maxNeg}, ${secondMaxNeg}` 
}

console.log(maxProduct(arr));