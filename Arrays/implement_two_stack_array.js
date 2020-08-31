/*

push1(x) -> push in first stack
push2(x) -> push in second stack

pop(x) -> pop in first stack
pop(x) -> pop in second stack

Approach -> [ , , , , ,  ] 

len -> 6, mid -> 3
0 -> 2 | 3 -> 6
Dividing array in two halves -> inefficient solution -> not proper use of memory


Approach -> start operations from the extreme left and right of the Array
*/


var arr = new Array(6);
let top1 = -1;
let top2 = arr.length;
function push1(x) {
  if(top1 < top2 -1) {
   arr[++top1] = x; 
  }   
}

function push2(x) {
    if(top2 - 1  > top1) {
     arr[--top2] = x;
    }
}

function pop1() {
    if(top1 > 0) {
        const el =  arr[top1];
        arr[top1] = null;
        top1--;

        return el;
    }
}

function pop2(){
    if(top2 < arr.length) {
        const el =  arr[top2];
        arr[top2] = null;
        top2++;
        return el;   
    }
}

push1(2);
push2(6);
push1(2);
push1(8);
push1(5);
push1(8);
push1(8);
push2(8);
pop1();
push1(8);
pop2();
console.log(top1, top2)
console.log(arr);