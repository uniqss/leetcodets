
function largestRectangleArea(heights: number[]): number {
    if (heights.length === 0) return 0;
    let stackIdx :number[] = [];
    let maxArea : number = 0;
    heights.push(0);
    for (let i:number = 0;i < heights.length;i++) {
        // 遇矮结算
        while (stackIdx.length > 0 && heights[stackIdx[stackIdx.length - 1]] > heights[i]) {
            let idx = stackIdx.pop();
            if (idx === undefined) {
                console.log("fuck");
                continue;
            }
            let width : number = 0;
            if (stackIdx.length > 0) {
                width = i - stackIdx[stackIdx.length - 1] - 1;
            } else {
                width = i;
            }
            let height:number = heights[idx];
            let area = width * height;
            maxArea = Math.max(maxArea, area);
            //console.log("pop idx:", idx, " i:", i, " width:", width, " height:", height, " area:", area, " maxArea:", maxArea);

        }
        stackIdx.push(i);
        //console.log("stackIdx:", stackIdx, " i:", i)
    }
    return maxArea;
};

let heights = [2,1,5,6,2,3];
// let heights = [4,2,0,3,2,5];
let result = largestRectangleArea(heights);

console.log(result);
