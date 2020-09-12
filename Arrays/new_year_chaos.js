//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_r=internal-search

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let bFlag = false;
  let bribes = 0;
  for(let i = q.length - 1; i > 0; i--){
      if(q[i] != i+1){
          if(i-1 >= 0 && q[i-1] === i+1){
             q[i-1] = q[i];
             q[i] = i + 1;
             bribes++;
          }
           else if(i-2 >= 0 && q[i-2] === i+1){
                q[i-2] = q[i -1];
             q[i -1] = q[i];
             q[i] = i +1;
              bribes += 2;
          } else {
              console.log("Too chaotic");
              return;
          }
      }
  }

  console.log(bribes);

}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
