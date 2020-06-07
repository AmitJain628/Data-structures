/*

i/p -> [2, 3, 10, 6, 4, 8, 1]
o/p -> 8, max diff is 1 and 10

i/p -> [7, 9, 5, 6, 3, 2]
o/p -> 2 max diff is 7 and 9

*/


function getMaxBetweenTwo(arr){
    let minEle = arr[0];
    let maxDiff = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] - minEle > maxDiff) {
             maxDiff = arr[i] - min;
        }

        if(arr[i] < minEle) {
            minEle = arr[i];
        }
    }

    return maxDiff;
}

console.log(getMaxBetweenTwo([2, 3, 10, 6, 4, 8, 1]));