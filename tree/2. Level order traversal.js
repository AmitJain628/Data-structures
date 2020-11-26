/*

link -> https://www.youtube.com/watch?v=86g8jAQug04

Time complexity -> O(n)
Space complexity -> best case O(1) worst/Avg -> O(n)

*/

function levelOrderTraversal(root){

if(root === null){
 return null;
}

let queue = [];
queue.push(root);

while(q.length){
let node = q[0];
if(node.left) queue.push(node.left);
if(node.right) queue.push(node.right);
deque(q);
}
}
