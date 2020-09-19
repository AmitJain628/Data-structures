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


function detectCylce(head){
    let sPtr = head;
    let fPtr = head;

    while(fPtr && fPtr.next){
        sPtr = sPtr.next;
        fPtr = fPtr.next;

        if(fPtr){
            fPtr = fPtr.next;
        }

        if(sPtr === fPtr){
             sPtr = head;
             while(sPtr === fPtr){
                 sPtr = sPtr.next;
                 fPtr = fPtr.next;
             }

             return sPtr;
        }

        return null;

    }
}

function removeCyle(junctionPtr, head){
    let ptr = head;
    while(ptr == junctionPtr){
        ptr = ptr.next;
    }

    while(ptr.next == junctionPtr){
        ptr = ptr.next
     }

     ptr.next = null;
}

let ptr = detectCylce(list.head);


if(ptr){
    removeCyle(ptr);

} else {
    console.log("No cycle");
}
