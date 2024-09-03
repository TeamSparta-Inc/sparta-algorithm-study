function productExceptSelf(nums: number[]): number[] {
    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
        const newNums = [...nums];
        newNums[i] = null;
        const filteredNums = newNums.filter(num=>num!==null)
        result[i] = filteredNums.reduce((acc,cur) => {
            if (acc === null) return cur;
            return acc * cur;
        },null);
    }
    return result
};