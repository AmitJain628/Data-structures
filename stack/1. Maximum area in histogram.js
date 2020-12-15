/*

Video: https://www.youtube.com/watch?v=ZmnqCZp9bBs
Link: https://www.geeksforgeeks.org/largest-rectangle-under-histogram/

Approach: push element if length is greater or equal than previous one

if length is smaller
  1. pop element one by one
  2. if stack is empty
        1.1 arr[pop] * (i)
        1.2 arr[pop] * (i-stack.top-1)
*/

function getMaxArea(arr){

let maxArea = Number.MIN_MAX;
let i=0;
let top=0;
let length = arr.length;
let s =[];

while(i<length){

if(s.length ===0 || arr[i] => arr[s[s.length-1]]){
  s.push(i);
} else {
  let ele = s.pop();
  
  let area = arr[ele] * (s.length === 0 ? i : (i- s[s.length-1]-1));
   
  if(area > maxArea){
    maxArea = area;
  }
}

i++;

while(s.length){

 let ele = s.pop();
  
  let area = arr[ele] * (s.length === 0 ? i : (i- s[s.length-1]-1));
   
  if(area > maxArea){
    maxArea = area;
  }

}

}

return maxArea;
}
