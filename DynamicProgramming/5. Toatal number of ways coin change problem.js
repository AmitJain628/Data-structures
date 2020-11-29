/*
https://www.youtube.com/watch?v=L27_JpN6Z1Q
*/

for(let i=0; i<= coins.length; i++){
 for(let j =0; j<=total; j++){
  if(coins[i] > j){
   a[i][j] = a[i-1][j]; 
  } else {
   a[i][j] = a[i-1][j] + a[i][j - coins[i]];
  }
 }
 
 return a[coins.length][total];
}
