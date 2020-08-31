function getSubArray(arr) {
    let count = 0;
    let len = 1;

    for(let i=1; i< arr.length; i++) {
        if(arr[i] > arr[i-1]) {
            count += len++;
        } else {
            len = 1;
        }
    }

    return count;
}

console.log(getSubArray([1,2,3,4]));