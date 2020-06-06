/*
Input: {88, 105, 3, 2, 200, 0, 10}
Output: 1
        4-9
        11-87
        89-99

Approach: create temp array with limit, and set as false
          init with current elemnt
          iterate over temp array to find the missing element
*/


function getMissingRange(arr, range) {
    let temp = [];

    for (let index = 0; index < range; index++) {
        temp[index] = false;
    }

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] <= range) {
         temp[arr[index]] = true;
        }
    }

   let i = 0;

    while(i < limit) {
        if(temp[i] == false) {     
            let j = i+1;
        while(arr[j] === false && j < limit) {
            j++
        }
        console.log(i + '-' + j);

        i = j;
    } else {
        i++;
    }
  }
}

getMissingRange([88, 105, 3, 2, 200, 0, 10], 100)