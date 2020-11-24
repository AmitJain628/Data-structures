
/*
GeeksforGeeks link: https://www.geeksforgeeks.org/largest-subarray-with-equal-number-of-0s-and-1s/

var arr[] = {1, 0, 1, 1, 1, 0, 0}
Max = 0
Sum[sum till i] = index;
If same sum occur again compare max with current index - same index
*/

function getLongestSum(arr) {
    var len = arr.length;
    var max =0;
    let sum = 0;
    var map = {};
    for(let i = 0; i < len; i++){
        arr[i] === 0 ? sum += -1 : sum += 1;
          
        if(map[sum] === undefined) {
          map[sum] = i;
        } else {
            max = Math.max(max, i - map[sum])
        }
    }

    return max;
}

