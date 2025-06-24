class Solution:
    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
        def _get_val_idx(i: int) -> int:
            if i < 0:
                return 0
            elif i > len(nums):
                return len(nums)
            else: 
                return i

        result_map = [0] * len(nums)
        for i, num in enumerate(nums):
            if num == key:
                a = _get_val_idx(i - k)
                b = _get_val_idx(i + k + 1)
                length = b - a
                result_map[a:b] = [1] * length
        
        result = []
        for i, n in enumerate(result_map):
            if n == 1:
                result.append(i)
        
        return result