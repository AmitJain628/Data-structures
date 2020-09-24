// find all the permutation and combination of a string


function swap(str, i, r){
    let temp = str[i];
    str[i] = str[r];
    str[r] = temp;
}

function permute(str, l, r){
    for(let i =l; i<r; i++){
        swap(str, l , i);
        permute(str, l+1, r);
        swap(str, l, r);
    }
}