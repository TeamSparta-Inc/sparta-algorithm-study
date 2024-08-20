function singleNumber(nums: number[]): number {
    const answerArray = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        if (answerArray.has(nums[i])) {
            answerArray.delete(nums[i]);
        } else {
            answerArray.add(nums[i]);
        }
    }
    return [...answerArray][0];
};