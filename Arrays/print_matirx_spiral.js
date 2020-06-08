/*

Input:  1    2   3   4
        5    6   7   8
        9   10  11  12
        13  14  15  16
Output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

*/



var arr = [
    [ 1,  2,  3,   4],
    [ 5,  6,  7,   8],
    [ 9,  10,  11,   12],
    [ 13,  14,  15,   16],
]


function printSpiral(arr){
    let col = arr[0].length;
    let row = arr.length;
    let i =0, j= col - 1, k = 0, l = row - 1;

    while(i< l && k < j) {
       console.log("new loop")
       console.log("1." + "i: "+ i, "j: "+ j, "k :" +k, "l :"+ l)

        for (let index = 0; index <= j; index++) {
             console.log(arr[i][index]);
        }

        i++;

       console.log("2." +"i: "+ i, "j: "+ j, "k :" +k, "l :"+ l)


        for (let index = i; index <= l; index++) {
            console.log(arr[index][j]);
        }

        j--;

        console.log("3." +"i: "+ i, "j-col: "+ j, "k :" +k, "l-row :"+ l)


        for (let index = j; index >= 0; index--) {
            console.log(arr[l][index]);
        }

        l--;

        console.log("4. " +"i: "+ i, "j-col: "+ j, "k :" +k, "l-row :"+ l)


        for (let index = l; index > 0; index--) {
            console.log(arr[index][k]);
        }
        k++;

       console.log("5." + "i: "+ i, "j-col: "+ j, "k :" +k, "l-row :"+ l)

    }
}

printSpiral(arr);