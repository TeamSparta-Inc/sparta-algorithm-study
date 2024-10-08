class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        first = nums[0]
        for n in nums[1:]:
            first ^= n

        return first
                