class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        result = nums1
        for num in nums1:
            temp = num
            if num in nums2:
                result = list(filter(lambda x: not x == num, result))
                nums2 = list(filter(lambda x: not x == num, nums2))

        return [list(set(result)), list(set(nums2))]
