/*
Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
                                           
Output : arr[] = {1, 2, 4, 3, 5, 0, 0};
*/

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function appendZeroEnd(arr) {
      
    let left = 0;
    let right = arr.length -1;

    while(left < right) {
        while(arr[left] !== 0 && left < right){
            left++;
        }

        while(arr[right] === 0 && left < right) {
            right--
        }

        if(left < right){
            swap(arr, left, right);
            left++;
            right--;
        }
   }
   
   return arr;
}


Console.log(appendZeroEnd([1, 2, 0, 4, 3, 0, 5, 0]));