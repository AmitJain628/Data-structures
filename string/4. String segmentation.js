/*

https://www.educative.io/m/string-segmentation

Time complexity -> O(2^n)

DP -> https://www.youtube.com/watch?v=WepWFGxiwRs

*/

function canStringSegmentation(str, arr){
  for(let i=0; i<str.length; i++){
    let first = str.subString(0, i);
     if(arr.indexOf(first) !== -1){
       let second = str.subString(i);
       if(second.length === 0){
          return true;
       }
       
       if(arr.indexOf(second) !== -1){
          return true;
       }
       
       if(canStringSegmentation(second, arr)){
          return true;
       }
     }
  }

  return false;
}
