
function mergeAlternately(word1: string, word2: string): string {
    const word1size = word1.length;
    const word2size = word2.length;
    let cal1 = 0;
    let cal2 = 0;

    let answer = "";

    while (true) {
        if(cal1 < word1.length) {
            answer += word1[cal1];
            cal1++;
        }

        if(cal2 < word2.length) {
            answer += word2[cal2];
            cal2++;
        }

        if(cal1 === word1.length && cal2 === word2.length) {
            break;
        }
    }
    return answer
};


mergeAlternately("abc", "pqr")
