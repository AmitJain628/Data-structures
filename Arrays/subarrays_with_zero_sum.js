/*

i/p -> {4, 2, -3, -1, 0 , 4 }
         
o/p -> {0}
       {-3, -1, 0, 4}

Approach -> take a variable sum and count sum till the point
And store the result in the hashmap -> if sum seen again that means we have a sub array with zero sum

4, 2, -3, -1, 0 , 4

sum = 4                      {4 -> 0   }
sum = 6                      {4 -> 0, 6 -> 1   }
sum = 3                     {4 -> 0, 6 -> 1, 3 -> 2 }
sum = 2                     {4 -> 0, 6 -> 1, 3 -> 2, 2 -> 3 }
sum = 2                     {4 -> 0, 6 -> 1, 3 -> 2, 2 -> 3, 4 }
sum = 6                     {4 -> 0, 6 -> 1 5,  3 -> 2, 2 -> 3, 4 }
*/

var arr = [4, 2, -3, -1, 0 , 4]


function calculateSubArrayWithSumZero(arr) {
    let map = {}, sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
        if(sum === 0){
            if(!map[0]){
                map[0] = [];
                map[0].push(0, index);
            }
        } else {


        if(map[sum]){
            map[sum].push(index);
        } else {
            map[sum] = [];
            map[sum].push(index);
        }
    }
    }

    Object.values(map).forEach(element => {
        if(element.length > 1) {
            console.log(element[0], element[1])
        }
    });
}

calculateSubArrayWithSumZero(arr);