function reverseVowels(s: string): string {
    let vowels = s.split('').filter(c => ['a','e','i','o','u', 'A','E', 'I', 'O', "U"].includes(c));

    return s.split('').map(c => ['a','e','i','o','u', 'A','E', 'I', 'O', "U"].includes(c) ? vowels.pop() : c).join('');
};

