function minPathSum(grid: number[][]): number {
    let m:number = grid.length;
    let n:number = grid[0].length;
    let dp:number[][] = grid.slice();
    for (let i = 1;i < m;i++) {
        dp[i][0] += dp[i - 1][0];
    }
    for (let j = 1;j < n;j++) {
        dp[0][j] += dp[0][j - 1];
    }
    for (let i = 1;i < m;i++) {
        for (let j = 1;j < n;j++) {
            if (dp[i - 1][j] <= dp[i][j - 1]) {
                dp[i][j] += dp[i - 1][j];
            } else {
                dp[i][j] += dp[i][j - 1];
            }
        }
    }
    return dp[m-1][n-1];
};


let grid:number[][] = [[1,3,1],[1,5,1],[4,2,1]];
let result:number = minPathSum(grid);
console.log(result);
