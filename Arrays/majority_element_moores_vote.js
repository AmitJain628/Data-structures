/* 

Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
Output : 4

Approach: We will use moore's vote algorithm
          1. find candidate of majority element
                1. To find candidate, inital set element to be at zero index
                2. Iterate the array, and increase the count, if count is zero, change the maj_element
          2. Check element is majority or not
                1. Simply check element present more than n/2 times
*/


function findCandidate(arr) {
    let majEle = 0;
    let count = 1;

    arr.forEach((element, index) => {
        if(element === arr[majEle]) {
            count++;
        } else {
            count--;
        }
        if(count === 0) {
            majEle = index;
            count = 1
        }
    });

    return majEle;
}

function findMajority(arr, ele) {
    let count = 0;
    arr.forEach(element => {
        if(element == ele) {
            count++;
        }
    });
    if(count > (arr.length/2)){
        return ele;
    } else {
        return -1;
    }
}

const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]
let elementIndex = findCandidate(arr);
const majEle = findMajority(arr, arr[elementIndex]);

console.log(majEle);
