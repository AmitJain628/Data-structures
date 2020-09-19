// Linked list implementation

class LinkedListNodes {
    constructor(value, next){
       this.value = value;
       this.next = next;
    }   
}

export default class LinkedList {
    constructor(value){
        this.size =0;
        this.head = null;
        this.tail = null;

        if(value){
            if(Array.isArray(value)){
                return this.fromArray(value)
            }

            return new TypeError("value is not iterable");
        }

    }


    preappend(value){
      
        this.size += 1; 
        const newNode = new LinkedListNodes(value, this.head);
        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }  

        return this;
    }

    append(value){
        this.size += 1;
        const newNode = new LinkedListNodes(value, null);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    fromArray(value){
        value.forEach(element => {
            this.append(append)
        });

        return this;
    }

     delete(value, deleteOne = false) {
    if (!this.head) return false;

    let deletedNode = null;

    // If the head needs to be deleted 
    while (this.head && this.head.value === value) {
      this.size -= 1;
      deletedNode = this.head;
      this.head = this.head.next;
      if (deleteOne) return true;
    };

    let currentNode = this.head;

    // If any node except the head or tail needs to be deleted
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          this.size -= 1;
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
          if (deleteOne) return true;
        } else {
          currentNode = currentNode.next;
        };
      };
    };

    // If the tail needs to be deleted
    if (this.tail.value === value) {
      this.tail = currentNode;
    };

    if (deletedNode === null) {
      return false;
    } else {
      return true;
    };
  }

  deleteHead() {
    if (!this.head) return null;

    this.size -= 1;

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  deleteTail() {
    if (this.size === 0) return false;

    if (this.size === 1) {
      if (this.head === null) {
        return false;
      } else {
        this.head = null;
        this.tail = null;
        this.size -= 1;
        return true;
      }
    }

    const deletedTail = this.tail;

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        this.size -= 1;
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }
}

var list = new LinkedList();

console.log(list.head);
list.append(1);
console.log(list.head);
list.append(2);
console.log(list.head);