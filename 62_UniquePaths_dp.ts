// 这个问题有对称性。简单解法是直接声明dp[m - 1][n - 1]
// 仔细推敲会发现，其实我们在循环的时候，只用记下上一排的数据就行了。所以只用申请dp[m - 1]就行了
// 因为有对称性，可以先把m设置为m和n里面最小的那个，这样等于是做了一个对称
// 简单解：

function uniquePaths(m: number, n: number): number {
    let dp : number[][] = [];
    for (let i = 0;i < m;i++) {
        let dpi:number[] = [];
        for (let j = 0;j < n;j++) {
            if (i > 0 && j > 0) {
                dpi.push(dp[i - 1][j] + dpi[j - 1]);
            } else {
                dpi.push(1);
            }
        }
        dp.push(dpi);
    }
    return dp[m - 1][n - 1];
};

let m = 3,n = 7;
let result = uniquePaths(m, n);
console.log(result);
