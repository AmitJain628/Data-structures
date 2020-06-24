/*
Input : arr[] = {-2, 0, 1, 3}
        sum = 2.
Output : 2
Explanation :  Below are triplets with sum less than 2
               (-2, 0, 1) and (-2, 0, 3)

Input : arr[] = {5, 1, 3, 4, 7}
                {1, 3, 4, 5, 7}
        sum = 12.
Output : 4
Explanation :  Below are triplets with sum less than 12
               (1, 3, 4), (1, 3, 5), (1, 3, 7) and 
               (1, 4, 5)

Approach: 1. sort the Array
          2. keep i as fixed, take start and end pointer and check the sum 
          if sum is greater, decrement the end else get all values of from end - start

*/

var arr = [5, 1, 3, 4, 7]
var sum = 12;

function getTripletCount(arr, sum){
   let newArr = arr.sort((i ,j) => i > j ? 1 : -1);
   let result = 0;

   for (let i = 0; i < arr.length - 2; i++) {
       let start = i + 1;
       let end = arr.length -1;

       while(start < end) {

        if((arr[i] + arr[start] + arr[end] >= sum)) {
            end --;
        } else {
            result += end - start;
            start++;
        }
     }
   }

   return result;
}

