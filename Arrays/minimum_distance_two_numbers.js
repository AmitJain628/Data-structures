/*
Input: arr[] = {3, 4, 5}, x = 3, y = 5
Output: Minimum distance between 3 
and 5 is 2.

Approach: Get first x or y location, and store in variable
          Traverse to the right and if x or y found check with the prev, and with the min distance
*/


function getMinimumDistance(arr, x, y){

    let prev;
    let min = Number.MAX_SAFE_INTEGER;
    for(var i =0; i< arr.length; i++){
        if(arr[i] === x || arr[i] === y){
           prev = i;
           break;
        }
    }

    while(i < arr.length) {
        if(arr[i] === x || arr[i] === y){
            
            if(arr[i] !== arr[prev] && min > i - prev) {
                min = i - prev;
            } else {
                prev = i;
            }
         }
        i++;
    }
 
    return min;
}

console.log(getMinimumDistance([3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3],3,6))

