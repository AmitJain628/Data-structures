//https://www.geeksforgeeks.org/find-subarray-with-given-sum/
// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Ouptut: Sum found between indexes 2 and 4

let arr = [1, 4, 20, 3, 10, 5];
let sum = 33;

function getSubArrayWithSum(arr, k){
    let i, j= 0;
    let found = false;
    let sum =0;

    for(i =0; i< arr.length; i++){
        sum += arr[i];
        
        while(sum > k){
            sum -= arr[j];
            j++;
        }

      if(sum ===k){
          found = true;
          break; 
       }
         
    }

    return found ? `${j} to ${i}` : 'Not found';
}

console.log(getSubArrayWithSum(arr, sum));
