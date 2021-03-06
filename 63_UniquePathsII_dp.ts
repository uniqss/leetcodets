function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (obstacleGrid[0][0] === 1) return 0;
    let m :number = obstacleGrid.length;
    let n:number = obstacleGrid[0].length;

    let dp:number[][] = obstacleGrid.slice();

    dp[0][0] = 1;
    for (let i = 1;i < m;i++) {
        dp[i][0] = (dp[i - 1][0] === 1 && obstacleGrid[i][0] === 0) ? 1 : 0;
    }
    for (let j = 1;j < n;j++) {
        dp[0][j] = (dp[0][j - 1] === 1 && obstacleGrid[0][j] === 0) ? 1 : 0;
    }

    for (let j = 1;j < n;j++) {
        for (let i = 1;i < m;i++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return dp[m - 1][n - 1];
};


let obstacleGrid :number[][] = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];

let result :number = uniquePathsWithObstacles(obstacleGrid);
console.log(result);
