// https://www.geeksforgeeks.org/print-nodes-dont-sibling-binary-tree/
// Complexity -> O(n) simple tree traversal

let results =[];

function printNodes(root){
  
if(root === null){
  return null;
}

if(root.left !=null && root.right !=null){
   printNodes(root.left);
   printNodes(root.right);
} else if(root.left === null) {
    results.push(root.right);
    printNodes(root.right);
} else if(root.right === null) {
    results.push(root.left);
    printNodes(root.left);
}
}
