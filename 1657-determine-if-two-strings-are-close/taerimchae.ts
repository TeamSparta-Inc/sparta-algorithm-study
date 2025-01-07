
function closeStrings(word1: string, word2: string): boolean {
     if (word1.length !== word2.length) {
        return false;
    }
    const freq1 = new Map();
    const freq2 = new Map();
    for (const c of word1) {
        freq1.set(c, (freq1.get(c) || 0) + 1);
    }
    for (const c of word2) {
        freq2.set(c, (freq2.get(c) || 0) + 1);
    }
    const freq1Values = [...freq1.values()].sort((a, b) => a - b);
    const freq2Values = [...freq2.values()].sort((a, b) => a - b);
    return [...freq1.keys()].sort().join('') === [...freq2.keys()].sort().join('') && freq1Values.join('') === freq2Values.join('');

};