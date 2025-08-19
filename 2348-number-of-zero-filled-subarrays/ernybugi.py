class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        result = 0
        consecutive_count =0
        for num in nums:
            if num == 0:
                consecutive_count += 1
                result += consecutive_count
            else:
                consecutive_count = 0
        return result