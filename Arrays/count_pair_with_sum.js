/*
Input  :  arr[] = {1, 5, 7, -1}, 
          sum = 6
Output :  2
Pairs with sum 6 are (1, 5) and (7, -1)

Input  :  arr[] = {1, 5, 7, -1, 5}, 
          sum = 6
Output :  3
Pairs with sum 6 are (1, 5), (7, -1) &
                     (1, 5)  
*/

var arr = [1, 5, 7, -1];

function getCountPairSum(array, sum) {
    let freq = {};
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if(!freq[array[index]]) {
            freq[array[index]] = 1;
        } else {
            freq[array[index]]++;
        }
    }        
        for (let index = 0; index < array.length; index++) {
              if(freq[sum - array[index]]){
                  count++;
              }
        }


    return count / 2;

}

console.log(getCountPairSum(arr, 6));