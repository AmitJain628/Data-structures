/*

i/p -> [16, 17, 4, 3, 5, 2] -> 17, 
o/p -> [17, 5, 5, 5, 2, -1]

Approach: Start the element from the last, and track the max element
          and replace element one by one with the max element
*/


function replaceElementWithLargest(arr) {
    let maxElem = -1;
    for (let index = arr.length - 1; index >= 0; index--) {
        const el = arr[index];
        arr[index] = maxElem;
        if(maxElem < el){
            maxElem = el
        }
    }

    return arr;
}

console.log(replaceElementWithLargest([16, 17, 4, 3, 5, 2]))
