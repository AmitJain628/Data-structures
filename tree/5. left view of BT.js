/*
https://www.geeksforgeeks.org/print-left-view-binary-tree/
https://www.youtube.com/watch?v=AIokcTT0LuE

*/


// using level order traversal

function printLeftView(root){

if(root == null)
  return null;
  
let queue = [];

queue.push(root);

while(queue.length > 0) {
 let iCtr =0;
 let size = queue.length;
 
 while(iCtr < size) {
    let curr = queue.shift();
    
    if(curr.left)
      queue.push(curr.left);
      
    if(curr.right)
      queue.push(curr.right);
     
     if(iCtr === 1){
      console.log(iCtr.data);
     }
     
     iCtr++;
 }
}
}


// using recursion 

function leftViewutil(root, level, maxLevel){

if(root == null)
  return null;

if(maxLevel < level){
  console.log(root.data);
  maxLevel = level;
}
leftViewutil(root.left, level+1, maxLevel);
leftViewutil(root.right, level+1, maxLevel);
}


leftViewutil(root, -1, 0)















