function countBits(n: number): number[] {
    const ans = new Uint8Array(n + 1);
    for (let i = 0; i < ans.length; i++) ans[i] = ans[i >> 1] + (i & 1);
    return [...ans];
};