class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        result = 0
        streak = 0
        for i in nums + ['end']:
            if i == 0:
                streak += 1
                result += streak
            elif streak > 0:
                streak = 0
        
        return result