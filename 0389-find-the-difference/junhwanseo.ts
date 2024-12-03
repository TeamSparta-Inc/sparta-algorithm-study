function findTheDifference(s: string, t: string): string {
    const charCount: Record<string, number> = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of t) {
        if (!charCount[char]) return char;
        charCount[char]--;
    }
    return '';
};