function isPalindrome(x: number): boolean {
    return Number(x.toString().split("").reverse().join("")) === x;
};