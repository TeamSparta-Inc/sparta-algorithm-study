class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        subseq_dict = {}
        _minmax = 1
        for num in nums:
            subseq_dict[num] = num + 1

        try:
            while 1:
                _minmax = subseq_dict[_minmax]
        except:
            return _minmax
        return _minmax