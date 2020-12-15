/*

Video: https://www.youtube.com/watch?v=kqHNP6NTzME

Link: https://www.geeksforgeeks.org/print-binary-tree-vertical-order-set-2/

   1
        /    \ 
       2      3
      / \   /   \
     4   5  6   7
               /  \ 
              8   9 
              
              O/p: 
4
2
1 5 6
3 8
7
9
*/

// Drawback: Does not maintain horizontal order
function printVerticalOrder(root, level, hashMap){

  if(root === null)
    return null;
    
  if(!hashMap[level]){
    hashMap[level] =[];
  }
  hashMap[level].push(root.data);
  
  printVerticalOrder(root.left, level-1, hashMap);
  printVerticalOrder(root.right, level+1, hashMap);
  
}

let hashMap = {};
let level = 0;

printVerticalOrder(root, level, hashMap);
