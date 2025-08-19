class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        def _calc_sub_subarray(n: int) -> List[int]:
            return [i for i in range(n, 0, -1)]
            
        result = 0
        streak = 0
        for i in nums + ['end']:
            if i == 0:
                streak += 1
            elif streak > 0:
                result += sum(_calc_sub_subarray(streak))
                streak = 0
        
        return result