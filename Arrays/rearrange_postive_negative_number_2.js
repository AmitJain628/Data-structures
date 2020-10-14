let arr = [1, 2, 3, -4, -1, 4];

function rearrange(arr) {

  function rightRotateArray(arr, outOfBound, cur){
   let temp = arr[cur];
   for(let i = cur; i >outOfBound; i--){
       arr[i] = arr[i-1];
   }
   arr[outOfBound] = temp;
  }

  let indexOutOfBound = -1;

  for(let index=0; index< arr.length; index++){
        if(indexOutOfBound >= 0) {
           if((arr[index] >=0 && arr[indexOutOfBound] <0) || (arr[index] < 0 && arr[indexOutOfBound] >= 0)){
               rightRotateArray(arr, indexOutOfBound, index);
                if(index - indexOutOfBound >= 2) {
                    indexOutOfBound = indexOutOfBound + 2;               
                } else { 
                    indexOutOfBound = -1;
                }
           }
        } else {
          if((arr[index] > 0 && (index % 2 === 0)) || (arr[index] < 0 && (index % 2 !== 0))){
               indexOutOfBound = index;
          }
        }
  }
   console.log(arr);
}

console.log(rearrange(arr));
