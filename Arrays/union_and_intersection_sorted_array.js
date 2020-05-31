/*
Input : arr1[] = {1, 3, 4, 5, 7}
        arr2[] = {2, 3, 5, 6} 
Output : Union : {1, 2, 3, 4, 5, 6, 7} 
         Intersection : {3, 5}
Union approach: arr[i] > arr[j]
                 j++
                arr[i] < arr[j]
                i++
                arr[i] == arr[j]
                i++;
                j++;
*/

function getUnion(arr1, arr2) {
    let i=0, j=0;
    let result=[];
    while(i< arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
          result.push(arr1[i]);
          i++;
        } else if(arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else if(arr1[i] === arr2[j]) {
             result.push(arr1[i]);
             i++;
             j++;
        }
    }

    if(i < arr1.length) {
       result = result.concat(arr1.slice(i))
    }

    if(j < arr2.length) {
       result = result.concat(arr2.slice(j))
    }
    return result;
}

console.log(getUnion([1, 3, 4, 5, 7], [2, 3, 5, 6]));

function getIntersection(arr1, arr2) {
    let i=0, j=0;
    let result=[];
    while(i< arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
          i++;
        } else if(arr1[i] > arr2[j]) {
            j++;
        } else if(arr1[i] === arr2[j]) {
             result.push(arr1[i]);
             i++;
             j++;
        }
    }
   
    return result;
}

console.log(getIntersection([1, 3, 4, 5, 7], [2, 3, 5, 6]));
