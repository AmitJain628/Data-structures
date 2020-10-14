function findSequence(str, rem=""){
 
  if(str.length === 0){
      result.push(rem);
      return;
  }

  findSequence(str.substring(1), rem + str.charAt(0));
  findSequence(str.substring(1), rem);

}

let result = [];
findSequence("abcd", "");

console.log(result);
