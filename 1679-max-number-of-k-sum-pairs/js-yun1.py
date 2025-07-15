class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        l, r = 0, len(nums)-1
        result = 0
        while l < r:
            if (s:=(nums[l] + nums[r])) == k:
                result += 1
                l += 1
                r -= 1
            elif s < k:
                l += 1
            elif s > k: 
                r -= 1
        
        return result