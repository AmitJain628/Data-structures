let coins = [9, 6, 5, 1];
let total = 11;

let table = [];
table[0] = 0;

for(let i=1;i<total+1;i++){
 table[i] = Number.MAX_SAFE_INTEGER;
}

console.log(table);

for(let i=0; i<coins.length;i++){
   for(let j=0; j< table.length; j++){
   
     if(j >= coins[i]){
         table[j] = Math.min(table[j], 1 + table[j - coins[i]])
     }
   }
}

console.log(table[total]);
