/*
Heap: https://www.youtube.com/watch?v=HqPJF2L5h9U
*/

function getKthPostion(arr, l, h, k){
       let pos = partition(arr, l, h);
       if(pos === k){
         return arr[pos];
       } else if(pos > k) {
         return getKthPostion(arr, l, pos-1, k)
       } else {
         return getKthPostion(arr, pos + 1, h, k)
       }
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, l, h){
    let pvt = arr[h];
    let i = l;
    for(let j = l; j<=h-1; j++) {
        if(arr[j] <= pvt){
           swap(arr, i, j);
           i++;
        }
    }

    swap(arr, i, h);

    return i;
}

let arr = [7, 10, 4, 3, 20, 15];
let k = 0;
console.log(getKthPostion(arr, 0, arr.length-1, k));
