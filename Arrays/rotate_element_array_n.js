/*

Program to rotate the element by N

// Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
// Output arr[] = [3, 4, 5, 6, 7, 1, 2]
// complexity -> O(n * d) and space -> O(1)
For O(n) -> Check new juggling method by finding GCD and rotate the element only in split : https://www.geeksforgeeks.org/array-rotation/
*/

var arr = [1, 2, 3, 4, 5, 6, 7];

function sortRotateByOne(arr, rotate) { 

    let temp = arr[0];
    let index;
    for (index = 0; index < arr.length - 1; index++) {
              arr[index] = arr[index + 1];
    }
    arr[index] = temp;
}

function sortByN(arr, rotate){
    for (let index = 0; index < rotate; index++) {
        sortRotateByOne(arr, index)   
    }

    console.log(arr);
}

sortByN(arr, 2)
