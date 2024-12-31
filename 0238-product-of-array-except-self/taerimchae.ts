function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const output = new Array(n).fill(1);
    let left = 1;
    let right = 1;
    for (let i = 0; i < n; i++) {
        output[i] *= left;
        output[n - 1 - i] *= right;
        left *= nums[i];
        right *= nums[n - 1 - i];
    }
    return output;
    
};