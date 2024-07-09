class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        l = 0
        r = sum(nums)

        for i, x in enumerate(nums):
            if i-1 >= 0:
                l += nums[i-1]
            r -= x
            if l == r:
                return i
            
        return -1
