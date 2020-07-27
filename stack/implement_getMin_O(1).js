/*

Implement getMin in O(1) time with O(N) space


Aproach -> 
MinElem -> Check for Min value
Push -> If element is less than Min value, change to new MinValue
And Insert 2 * X - minEle

POP -> If elemnet less than min is removed 
Then MinELemen = 2 * MinElem - X

*/


function push2(stack, minEle, ele) {

    if(ele < minEle){
      stack.push((2 * ele) - minEle);
      minEle = ele;
    } else {
        stack.push(ele);
    }
    return minEle;
}

function pop(stack, minEle){
     let ele = stack.pop();
     if(ele < minEle) {
         minEle = (2 * minEle) - ele;
     }

     return minEle;
}

function main(){
    var stack = [];
    let minEle = Number.MAX_SAFE_INTEGER;

    minEle = push2(stack, minEle, 2);
    minEle = push2(stack, minEle, 3);
    minEle = push2(stack, minEle, 4);
    minEle = push2(stack, minEle, 1);
    minEle = push2(stack, minEle, 0);
    minEle = pop(stack, minEle);
}