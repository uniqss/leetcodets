function maxSubArray(nums: number[]): number {
    if (nums.length == 0) return 0;
    let ret :number = nums[0];
    let imax:number = nums[0];
    for (let i = 1;i < nums.length;i++) {
        imax = Math.max(imax + nums[i], nums[i]);
        ret = Math.max(ret, imax);
    }
    return ret;
};

let nums:number[] = [-2,1,-3,4,-1,2,1,-5,4];
let ret:number = maxSubArray(nums);
console.log(ret);
