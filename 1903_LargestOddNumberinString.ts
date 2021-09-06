function largestOddNumber(num: string): string {
    for (let index = num.length - 1; index >= 0; index--) {
        const element = Number(num[index]);
        console.log(element, index);
        if (element % 2 == 1){
            return num.substr(0, index + 1);
        }
    }
    return "";
};

let num:string = "52";
const result = largestOddNumber(num);
console.log(result);