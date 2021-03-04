function trap(height: number[]): number {
    if (height.length <= 2) return 0;

    let ret :number = 0;

    let size = height.length;

    let left_max: number[] = [];
    left_max.length = size;
    left_max[0] = height[0];
    let i : number;
    for (i = 1;i < size;i++) {
        left_max[i] = Math.max(left_max[i - 1], height[i]);
    }

    let right_max: number[] = [];
    right_max.length = size;
    right_max[size - 1] = height[size - 1];
    for (i = size - 2;i >= 0;i--) {
        right_max[i] = Math.max(right_max[i + 1], height[i]);
    }

    for (i = 0;i < size;i++) {
        ret += Math.min(left_max[i], right_max[i]) - height[i];
    }

    return ret;
};

let arr: number[] = [0,1,0,2,1,0,1,3,2,1,2,1];
let result :number = trap(arr);
console.log(result);