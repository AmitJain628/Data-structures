//Given a set of non-negative integers, and a value sum, 
//determine if there is a subset of the given set with sum equal to given sum.

//Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
//Output: True  
// There is a subset (4, 5) with sum 9.

/* 
solution -> recursive
sum(set, n-1, sum) || sum(set, n-1, sum - set[n-1]);

*/

function subSet(set, n, sum){
    if(sum === 0){
        return true;
    }

    if(n === 0 ){
        return false;
    }

    if(set[n-1] > sum){
        return subSet(set, n-1, sum);
    }

    return subSet(set, n-1, sum) || subSet(set, n-1, sum - set[n-1]);
}


function isSubSet(set, n, sum){
    let dp =[];

    for (var i = 0; i <= n; i++) {
      dp[i] = [];
    }


    for(let i=0; i<=n; i++){
        dp[i][0] = true;
    }

    for(let i=1; i<=sum; i++){
          dp[0][i] = false;
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=sum; j++){
            if(j < set[i-1]){
                dp[i][j] = dp[i-1][j];
            } else if(j >= set[i-1]){
                dp[i][j] = dp[i-1][j] || dp[i-1][j - set[i-1]];
            }
        }
    }

    return dp[n][sum];

}