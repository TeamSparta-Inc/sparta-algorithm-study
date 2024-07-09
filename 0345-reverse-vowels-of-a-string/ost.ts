function reverseVowels(s: string): string {
    const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const vowelsInS = [];
    let result = ''

    for (let i = 0; i < s.length; i++) {
        if (VOWELS.includes(s[i])) vowelsInS.push(s[i]);
    }

    for (let i = 0; i < s.length; i++) {
        if (VOWELS.includes(s[i])) {
            result += vowelsInS.pop();
        } else {
            result += s[i];
        }
    }

    return result;
};