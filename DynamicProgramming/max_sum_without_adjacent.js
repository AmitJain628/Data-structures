/*

i/p -> {5,  5, 10, 40, 50, 35}
o/p -> 110

incl -> 5  
excl -> 0

incl -> 5
excl -> 5

incl -> 15
excl -> 5

incl -> 45
excl -> 15

incl -> 65
excl -> 45

Approach: consider two sum inclusive and exclusive 
inclusive is when u consider the element in the sum, and exclusive not consider the sum
*/

function getAdjacentSum(arr) {

    let inclusive = arr[0];
    let exclusive = 0;

    for (let i = 1; i < arr.length; i++) {
        let temp = inclusive;
        inclusive = Math.max(exclusive, exclusive + arr[i]);
        exclusive = Math.max(temp, exclusive);
        console.log("arr:" +arr[i], "incl:"+inclusive, "excl:" + exclusive)
        }

        return Math.max(inclusive, exclusive);

}

var arr = [3, 4, -2, 1, -2, 4, 6, -3, 5];
console.log(getAdjacentSum(arr));

