/*

Implement queue using stack.
We can use two stack here s1 and s2

Push in S1 For Enqueue
For Dequeue -> pop everything from s1, and push in s2 then pop from s2
*/



function enqueue(stack1, ele) { 

    stack1.push(ele);
}

function dequeue(stack1, stack2) {


  if(!stack2.length) {
    while(stack1.length !== 0) {
        const ele = stack1.pop();
        stack2.push(ele);
    }
  }

  return stack2.pop();

}


function main(){
    var stack1 = [];
    var stack2 = [];

    enqueue(stack1, 4);
    enqueue(stack1, 5);
    enqueue(stack1, 6);
    enqueue(stack1, 7);

    console.log(dequeue(stack1, stack2));

    enqueue(stack1, 8);

    console.log(dequeue(stack1, stack2));
}