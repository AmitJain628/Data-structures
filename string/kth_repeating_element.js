let str = "geeksforgeeks";
let k =3;

console.log(getKthRepeating(str, k));

function getKthRepeating(str, k){
  
  let index = [];
  let count = [];

  for(let i=0;i < 256; i++){
    index[i] = str.length;
    count[i] = 0  
  }

  for(let i=0; i< str.length; i++){
     count[str[i]]++;

     if(count[str[i]] === 1){
           index[str[i]] = 1;
     }

     if(count[str[i]] > 1){
       index[str[i]] = str.length;
     }
  }

  // sort the index array

  return index[k-1];
}
