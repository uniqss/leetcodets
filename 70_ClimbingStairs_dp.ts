function climbStairs(n: number): number {
    let dp : number[] = Array.from({length:n + 1}, ()=>0);
    dp[0] = dp[1] = 1;
    for (let i = 2;i <= n;i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};


let n = 2;
let result = climbStairs(n);
console.log(result);
