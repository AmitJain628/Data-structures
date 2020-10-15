let number = 534976;

function nextGreaterNumber(num){
   if(num === null || num === "undefined" || typeof num !== "number"){
     return -1;
   }

   let number = num.toString();

   if(checkforIncreasing(number)){
       return reverse(number);
   }

   if(checkForDecreasing(number)){
     return "Not possible";
   }

   let i, j, smallest = Number.MIN_VALUE;
   for(i = number.length -1; i > 0; i--) {
      if(arr[i] < arr[i+1]) {
         return;
      }
   }

   for (let iCtr = i+1; iCtr<number.length; iCtr++) {
        if(smallest > number[iCtr]) {
            smallest = number[iCtr];
            j = iCtr;
        }
   }

   swap(number, i, j);

   sort(number); // sort number from i+1 to len;

   return number;
}

function swap(number, i , j){
  let temp = number[i];
  number[i]= number[j];
  number[j] = temp;
}

function checkforIncreasing(number) {
    for(let i =0; i< number.length; i++) {
          if(number[i] > number[i+1]){
            return false;
          } 
    }
    return true;
   }

   function checkForDecreasing(number){
        for(let i =0; i< number.length; i++) {
          if(number[i] < number[i+1]){
            return false;
          } 
    }
    return true;
   }

   function reverse(s){
    return s.split("").reverse().join("");
   }


console.log(nextGreaterNumber(number));
