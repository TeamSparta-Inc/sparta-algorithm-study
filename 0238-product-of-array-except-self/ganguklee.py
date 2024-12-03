from functools import reduce

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        east = [1]
        west = [1]

        for n in nums:
            east.append(east[-1] * n)
        for n in reversed(nums):
            west.append(west[-1] * n)

        size = len(nums)
        return [east[i] * west[size-1-i] for i in range(size)]