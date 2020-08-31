/*

Implement two stacks in array.

top1 -> 0
top2 -> n-1
push from start and end

*/


function push1(arr, stack, ele) {
    if(stack.top1 < stack.top2 - 1) {
      arr[++stack.top1] = ele;
     }
 }
 
 function push2(arr, stack, ele) {
     if(stack.top2 - 1 > stack.top1) {
       arr[--stack.top2] =ele;
     }
 }
 
 function pop1(arr, stack) {
     if(stack.top1 >= 0) {
         const ele = arr[stack.top1];
         arr[stack.top1] = undefined;
         stack.top1--;
         return ele;
     }
 }
 
 function pop2(arr, stack) {
     if(stack.top2 < arr.length) {
         const ele = arr[stack.top2];
         arr[stack.top2] = undefined;
         stack.top2++;
         return ele;
     }
 }
 
 
 function main() {
     let arr = new Array(10);
     let stack = {
         top1: -1,
         top2: arr.length - 1
     };
 
     push1(arr, stack, 1);
     push1(arr, stack, 2);
         push1(arr, stack, 3);
 
     push2(arr, stack, 9);
     push2(arr, stack, 10);
     push2(arr, stack, 11);
 
     console.log(pop1(arr, stack));
     console.log(pop2(arr, stack));
 }
 
 main()