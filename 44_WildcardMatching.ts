function isMatch(s: string, p: string): boolean {
    let slen :number = s.length;
    let plen :number = p.length;
    let dp :boolean[][] = new Array(slen + 1);
    for (let i = 0;i <= slen;i++) {
        dp[i] = new Array(plen + 1);
        for (let j = 0;j <= plen;j++) {
            dp[i][j] = false;
        }
    }
    dp[0][0] = true;
    for (let j = 1;j <= plen;j++) {
        for (let i = 0;i <= slen;i++) {
            if (p[j - 1] == '*') {
                if (dp[i][j - 1]) dp[i][j] = true;
                if (i > 0 && dp[i - 1][j]) dp[i][j] = true;
            } else if (p[j - 1] == '?') {
                if (i > 0 && dp[i - 1][j - 1]) dp[i][j] = true;
            } else {
                if (i > 0 && dp[i - 1][j - 1] && p[j - 1] == s[i - 1]) dp[i][j] = true;
            }
        }
    }
    return dp[slen][plen];
};

let s = "abc";
let p = "*?c";
let result = isMatch(s, p);
console.log(result);