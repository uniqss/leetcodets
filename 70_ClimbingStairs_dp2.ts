function climbStairs(n: number): number {
    let dpi1 = 1;
    let dpi2 = 1;
    let result = 1;
    for (let i = 2;i <= n;i++) {
        result = dpi1 + dpi2;
        dpi2 = dpi1;
        dpi1 = result;
    }
    return result;
};


let n = 3;
let result = climbStairs(n);
console.log(result);
