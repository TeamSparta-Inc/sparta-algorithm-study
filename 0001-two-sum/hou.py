import itertools
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        combinations = itertools.combinations(range(0, len(nums)), 2)
        for comb in combinations:
            if nums[comb[0]] + nums[comb[1]] == target:
                return comb
