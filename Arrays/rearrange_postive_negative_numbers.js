// https://www.geeksforgeeks.org/rearrange-positive-and-negative-numbers-publish/
// i/p -> [-1, 2, -3, 4, 5, 6, -7, 8, 9]
// o/p -> [9, -7, 8, -3, 5, -1, 2, 4, 6]

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

function rearrange(arr){

    let pivotPos = -1;

    console.log("arr", arr);

    for(let i =0; i< arr.length; i++){
          if(arr[i] < 0){
             pivotPos++;
             swap(arr, i, pivotPos);
          }
    }

    console.log("new arr", arr);

    let pos = pivotPos +1;
    let neg = 0;

}

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.log(rearrange(arr));