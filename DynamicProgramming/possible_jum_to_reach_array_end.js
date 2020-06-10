/*

i/p -> 1, 3, 2, 0, 2
o/p -> true

Approach i = 0 , reachable = 0
         i = 1,  reachable = 1
         i = 2   reachable = 4

i/p -> 1, 2, 1, 0, 2
o/p -> false

Approach: reachable = 0
 i = 0 reachable = 1
 i = 1 reachable = 3
 i = 2 reachable = 3
 i = 3 reahable = 3 
 i = 4 (i < reachable) -> false

*/


function canWePossibleJumpToEnd(arr) {
    let maxReachable = 0;
    for (let i = 0; i < arr.length; i++) {
         if(i > maxReachable) {
          return false;
        }
        if(maxReachable < (arr[i] + i)) {
            maxReachable = arr[i] + i;
        }
    }
    return true;
}

console.log(canWePossibleJumpToEnd(arr));