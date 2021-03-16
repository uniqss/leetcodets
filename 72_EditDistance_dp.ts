/*
填二维表，前面各加一个空。空空匹配为0
第一行为1, 2, 3...
第一列为1, 2, 3...
每一个位置的值分两种：
word1[i - 1] == word2[j - 1]  =>   dp[i][j] = dp[i - 1][j - 1]
word1[i - 1] != word2[j - 1]  =>   dp[i][j] = min(
                                                    dp[i - 1][j - 1],   // 替换 word1[i - 1] 为 word2[j - 1]
                                                    dp[i - 1][j],       // 删除 word1[i - 1]
                                                    dp[i][j - 1]        // 添加 word2[j - 1]
                                                )

  . r o s
. 0 1 2 3
h 1 1 2 3
o 2 2 1 2
r 3 2 2 2
s 4 3 3 2
e 5 4 4 3
 */

function minDistance(word1: string, word2: string): number {
    const len1: number = word1.length;
    const len2: number = word2.length;
    if (len1 == 0) return len2;
    if (len2 == 0) return len1;
    let dp: number[][] = Array.from({length:len1 + 1}, ()=>Array.from({length:len2 + 1}, ()=>0));
    for (let i = 1;i <= len1;i++) {
        dp[i][0] = i;
    }
    for (let j = 1;j <= len2;j++) {
        dp[0][j] = j;
    }
    for (let i = 1;i <= len1;i++){
        for (let j = 1;j <= len2;j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                let opReplace = dp[i - 1][j - 1];
                let opInsert = dp[i - 1][j];
                let opDelete = dp[i][j - 1];
                dp[i][j] = Math.min(opReplace, opInsert, opDelete) + 1;
            }
        }
    }

    return dp[len1][len2];
};

const word1: string = "horse";
const word2: string = "ros";

const result: number = minDistance(word1, word2);
console.log(result);
