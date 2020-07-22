/*

Article: https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65

Left child -> (2 * i + 1)
Right child -> (2 * i + 2)
Parent -> i - 1 / 2

Min Heap -> Lowest element on top
Max Heap -> Largest element on top

Use case -> Priority queues, and OS use heaps for scheduling jobs on priority basis

Complexity:

1. insertion -> O(logn) n -> number of elements

*/

class MinHeap {
      
    constructor(){
        this.heap = [null];
    }

    getParentElement(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftElement(index) {
        return ((2 * index) + 1);
    }

    getRightElement(index){
        return ((2 * index) + 2);
    }

    getMin() {
        return this.heap[1];
    }
    swap(arr, a, b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    insertElement(node) {
        this.heap.push(node);

        if(this.heap.length > 1) {
            let currentNode = this.heap.length - 1;
            //  heapify
            while(currentNode > 1 && this.heap[this.getParentElement(currentNode)] > this.heap[currentNode]) {
                this.swap(this.heap, this.getParentElement(currentNode), currentNode);
                currentNode = this.getParentElement(currentNode);
            }
        }
    }
    removeElement(){
        let smallestElement = this.heap[1];

        if(this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
        

       if(this.heap.length === 3 && this.heap[1] > this.heap[2]) {
            this.swap(this.heap, 1, 2);
            return smallestElement;
       }

       let currentNode = 1;
       let rightChildIndex = this.getRightElement(currentNode);
       let leftChildIndex = this.getLeftElement(currentNode);

       while(this.heap[leftChildIndex] && this.heap[rightChildIndex] && (this.heap[currentNode] > this.heap[leftChildIndex] || this.heap[currentNode] > this.heap[rightChildIndex])) {
           if(this.heap[currentNode] > this.heap[leftChildIndex]) {
              this.swap(this.heap, currentNode, leftChildIndex);
              currentNode = leftChildIndex;
           } else {
            this.swap(this.heap, currentNode, rightChildIndex);
            currentNode = rightChildIndex
           }
            rightChildIndex = this.getRightElement(currentNode);
            leftChildIndex = this.getLeftElement(currentNode);
       }

       if(this.heap[rightChildIndex] === undefined && (this.heap[currentNode] > this.heap[leftChildIndex])) {
           this.swap(this.heap, currentNode, leftChildIndex);
       } else if (this.heap.length === 2){
            this.heap.splice(1, 1);
       } else {
           return null;
       }

       return smallestElement;

    }
    }
  
}