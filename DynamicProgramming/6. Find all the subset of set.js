/*
Link: https://www.youtube.com/watch?v=B8ZEcSAliM4

*/

let results = [];



function getAllSubsets(set){

if(set.length === 0){
  return [];
}

getSubsets(0, set, []);

return results;
}

function getSubsets(start, set, currentList) {
    console.log(start, currentList);
    results.push([...currentList]);
    for(let i=start; i< set.length; i++){
     currentList.push(set[i]);
     getSubsets(i+1, set, currentList);
     currentList.splice(currentList.length - 1, 1);
    }
}


