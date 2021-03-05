function maxSubArray(nums: number[]): number {
    if (nums.length == 0) return 0;
    let dp:number[] = [];
    let ret :number = nums[0];
    dp[0] = nums[0];
    for (let i = 1;i < nums.length;i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        ret = Math.max(ret, dp[i]);
    }
    return ret;
};

let nums:number[] = [-2,1,-3,4,-1,2,1,-5,4];
let ret:number = maxSubArray(nums);
console.log(ret);
