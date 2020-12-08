/*
JS Solution: https://stackoverflow.com/questions/36487345/finding-multiple-solutions-to-8-queens
Video: https://www.youtube.com/watch?v=xFv_Hl4B83A

*/
var n =8;

solveNQ(n);

function isSafe(board, row, col){

for(let i=0; i< col; i++){
 if(col[row][i] === 1) {
   return false;
 }
}
  
  for(var i=row, j=col; j>=0 && i<n; i++, j--){
    if (board[i][j] === 1){
      return false;
    }
  }
 
  for(let i=row, j=col; i>0 && j >0;  i--, j--){
   if(board[i][j] == 1){
     return false;
   }
 }
 
 return true;
}

function solveNQ(n){
 if(n === 2 || n === 3){
  console.log("No Solution found");
 }
 
 let board = generateBoard(n);
 recurseNQ(board, 0, n);
}


function recurseNQ(board, col, n){
 if(n === col){
   printSolution(board); // print the solution
   return;
 }
 
 for(let i=0; i<n; i++){
  if(isSafe(board, i, col)) {
     board[i][col] = 1;
     recurseNQ(board, col+1, n);
     board[i][col] = 1;
  }
 }


}

function generateBoard(n){
 let board = [];
 
 for(let i=0; i<n; i++){
   board[i]=[];
   for(let j =0; j<n; j++){
   board[i][j]=0;
   }
 }

return board;
}
