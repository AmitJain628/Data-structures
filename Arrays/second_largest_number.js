var arr = [10,10,5,4,3,2,1];

function getSecondLargest(arr){
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;

    for(let i =0; i< arr.length; i++){
        if(arr[i] > max1){
            max2 = max1;
            max1 = arr[i];
        } else if(arr[i] > max2 && arr[i] != max1){
              max2 = arr[i];
        }

    }

    return max2;

}