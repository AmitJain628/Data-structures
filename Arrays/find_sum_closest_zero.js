/*

i/p -> [1, 60, -10, 70, -80, 85]

o/p -> -80 ,85

Approach: Sort the array, traverse the array 
1. [-80, -10, 1, 60, 70, 85]
*/

function getSumClosestZero(arr) {
    const newArr = arr.sort((x, y) => x > y ? 1 : -1);
    console.log(newArr);

    let left = 0;
    let right = newArr.length - 1;
    let min = Number.MAX_SAFE_INTEGER;

    while(left < right) {
        const sum = newArr[left] + newArr[right];

        if(Math.abs(sum) < Math.abs(min)) {
            min = sum;
        }

        if(sum > 0) {
            right--;
        } else {
            left++
        }
    }
}

console.log(getSumClosestZero([1, 60, -10, 70, -80, 85]));