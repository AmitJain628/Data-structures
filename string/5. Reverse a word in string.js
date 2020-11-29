/*

Link: https://www.youtube.com/watch?v=hQFr4p1OKpk&t=1s

*/function reverseWordInString(str){

let reverseStr = reverse(str);

 return reverseWords(reverseStr);

}

function reverseWords(str){

return str.split(" ").map(word => word.split('').reverse().join('')).join(' ')

}

function reverse(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
