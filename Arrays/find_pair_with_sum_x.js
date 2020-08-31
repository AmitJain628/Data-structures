/*

i/p -> [0, -1, 2, -3, 1]
sum -> -2
o/p -? -3, 1

Approach: sort an array
          take left && right pointer increment and decrement
*/


function getPair(arr, sum) {
    let left = 0;
    let right = arr.length -1;

    arr.sort((i, j) => i > j  ? 1 : -1);
    console.log(arr);

    while(left < right) {
        if(arr[left] + arr[right] === sum) {
            return `${left}, ${right}`;
        } else if(arr[left] + arr[right] > sum) {
            right--;
        } else {
            left++;
        }
    }

    return -1;
}

console.log(getPair([0, -1, 2, -3, 1], -2))
