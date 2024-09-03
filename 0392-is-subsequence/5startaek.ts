function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    for(let j = 0; j < t.length; j++) {
        if(t.charAt(j) === s.charAt(i)) {
            i++;
        }
    }
    return i === s.length;
};