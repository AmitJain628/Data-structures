/*
i/p -> {{1,3}, {2,4}, {5,7}, {6,8}}
o/p ->  {{1,4}, {5, 8}}

Approach: sort the array, on the start pointer,
   

*/

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}


let arr = [];
let obj1 = new Interval(1, 3);
arr.push(obj1);
let obj2 = new Interval(2, 4);
arr.push(obj2);
let obj3 = new Interval(5, 7);
arr.push(obj3);
let obj4 = new Interval(6, 8);
arr.push(obj4);

function mergeOverlap(arr){
     const newArr = arr.sort((a, b) => a.start > b.start ? 1 : -1);
     let stack = [];

     newArr.forEach(element => {
         if(!stack.length){
            stack.push(element);
         } else {
             const ele = stack.pop();
             if(ele.end > element.start && ele.end < element.end) {
                 let newEle = new Interval(ele.start, element.end);
                 stack.push(newEle)
             } else {
                 stack.push(ele);
                 stack.push(element);
             }
         }
     });

     while(stack.length) {
         console.log(stack.pop());
     }
}
mergeOverlap(arr);




