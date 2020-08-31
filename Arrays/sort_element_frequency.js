/*

i/p -> arr[] = {2, 5, 2, 8, 5, 6, 8, 8}

               2, 2, 5, 5, 6, 8, 8, 8

o/p -> arr[] = {8, 8, 8, 2, 2, 5, 5, 6}

{

}

Approach: 1. Store the element in hashing, and their indexes as well
          2. Sort the hashmap
*/

var arr = [2, 2, 4, 4, 5, 5, 6, 8, 8, 8];

function sortElementByFreq(arr) {
    let hashmap = {};
    for (let i = 0; i < arr.length; i++) {
        if(!hashmap[arr[i]]) {
            hashmap[arr[i]] =  {
                count: 1,
                index: i,
                name: arr[i]
            }            
        } else {
            hashmap[arr[i]].count = ++hashmap[arr[i]].count;
        }
    }

    const newArr = sortHashMap(hashmap);
    console.log(newArr); 
}

function constructNewArray(arr) {
    var newArr = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

}

function sortHashMap(hashmap) {
    var arr = Object.values(hashmap);
    return arr.sort((ele1, ele2) => {
        console.log(ele1);
        if(ele1.count < ele2.count) {
            return 1;
        } else if(ele1.count > ele2.count) {
            return -1;
        } else if(ele1.count === ele2.count && ele1.index > ele2.index) {
            return 1;
        } else {
          return -1;
        }
     })
}

sortElementByFreq(arr);