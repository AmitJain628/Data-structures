
import LinkedList from './implmentation_js';

var list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
console.log(list.head);


function reverse(prevPtr, currentPtr){

    if(!currentPtr){
        return;
    }

    if(!currentPtr.next){
        list.head = currentPtr;
        currentPtr.next = prevPtr;
        return;
    }

    reverse(currentPtr, currentPtr.next);

    currentPtr.next = prevPtr;

}

reverse(null, list.head);


// current 1     2.  3. 
// prev   null   1.  2. 

// 3 -> 2 -> 1 -> null