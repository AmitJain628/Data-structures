import LinkedList from './implmentation_js';

var list = new LinkedList();

console.log(list.head);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
console.log(list.head);

function getMiddleNode(list){

    let slowPtr = list.head;
    let fastPtr = list.head;

    while(fastPtr && fastPtr.next){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;

        if(fastPtr){
            fastPtr = fastPtr.next;
        }
    }

    return slowPtr;

}

console.log(getMiddleNode(list));