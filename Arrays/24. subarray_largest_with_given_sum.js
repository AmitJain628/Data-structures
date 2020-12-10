/*

Input : arr[] = { 10, 5, 2, 7, 1, 9 }, 
            k = 15
Output : 4
The sub-array is {5, 2, 7, 1}.

Approach: sum =0 map ={}

sum = 10,  map[10] -> 0
sum = 15   map[15] -> 1 maxLen = 2
sum = 17   map[17] -> 2
sum = 24   map[24] -> 3
sum = 25   map[25] -> 4  
*/

let arr = [10, 5, 2, 7, 1, 9];

function getLargestSubArrayWithSum(arr, res){
    let sum =0, map ={};
    let maxLen = Number.MIN_SAFE_INTEGER;

    for (let index = 0; index < arr.length; index++) {
        
        sum += arr[index];

        if(sum === res) {
            maxLen = index + 1;
        }

        if(!map[sum]){
            map[sum] = index;
        }

        if(map[sum - res] && maxLen <  index - map[sum - res]) {
              maxLen = index - map[sum - res];
        }     
    }

    return maxLen;
}
