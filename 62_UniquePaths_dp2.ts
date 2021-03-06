// 这个问题有对称性。简单解法是直接声明dp[m - 1][n - 1]
// 仔细推敲会发现，其实我们在循环的时候，只用记下上一排的数据以及左边一个的数据就行了。所以只用申请dp[m - 1]就行了
// 因为有对称性，可以先把m设置为m和n里面最小的那个，这样等于是做了一个对称
// 优化解：

function uniquePaths(m: number, n: number): number {
    if (m < n) {
        let tmp = m;m = n;n = tmp;
    }
    let dp:number[] = [];
    for (let i = 0;i < m;i ++) {
        dp[i] = 1;
    }
    let prev:number = 1;
    for (let j = 1;j < n;j++) {
        prev = 0;
        for (let i = 0;i < m;i++) {
            dp[i] += prev;
            prev = dp[i];
        }
    }
    return dp[m - 1];
};

let m = 3,n = 2;
let result = uniquePaths(m, n);
console.log(result);
