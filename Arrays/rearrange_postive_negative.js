// Re arrange postive and negative element in array

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

    console.log("new arr", arr, pivotPos);

    let pos = pivotPos +1;
    let neg = 0;

    while(neg<pos && arr[neg] <0 && pos<arr.length) {
         swap(arr, neg, pos);
         neg = neg + 2;
         pos++;
    }

 console.log(arr);

}

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.log(rearrange(arr));
