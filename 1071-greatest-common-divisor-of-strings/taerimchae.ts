function gcdOfStrings(str1: string, str2: string): string {
    function canDivide(target: string, str: string): boolean {
        const repeatCount = target.length / str.length;
        return target === str.repeat(repeatCount);
    }

    function gcd(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const len1 = str1.length;
    const len2 = str2.length;
    const gcdLength = gcd(len1, len2);

    const candidate = str1.substring(0, gcdLength);

    if (canDivide(str1, candidate) && canDivide(str2, candidate)) {
        return candidate;
    }

    return "";
}
