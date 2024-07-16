function pivotIndex(nums: number[]): number {
    let leftSum = 0
    let sum = nums.reduce((a,b) => a + b)
    
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === sum - leftSum - nums[i]) {
            return i
        }
        leftSum += nums[i]
    }
    
    return -1
};