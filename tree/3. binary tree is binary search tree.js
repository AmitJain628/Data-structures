/*
link: https://www.youtube.com/watch?v=yEwSGhSsT0U

*/

function isBinarySearchTree(root){
  return isBinaryUtil(root, Number.INT_MIN, Number.INT_MAX);
}

function isBinaryUtil(root, minVal, maxVal){
  if(root === null) {
    return true;
  }
  
  if((root.data > minVal && root.data < maxVal) &&
                         isBinaryUtil(root.left, minVal, root.data) &&
                         isBinaryUtil(root.right, root.data, maxVal)){
    return true;
  } else {
    return false;
  }
}
