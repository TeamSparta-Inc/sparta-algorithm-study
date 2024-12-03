class Solution(object):
    def search(self, nums, target):
        brk = None
        for i, v in enumerate(nums):
            if i == len(nums)-1:
                break
            if nums[i+1] < v:
                brk = i
                break
        if brk is not None:
            nums = nums[brk+1:] + nums[:brk+1]
        else:
            brk = -1

        idx = self.b_search(nums, target)
        if idx == -1: return idx
        return (brk+1 + idx) % len(nums)
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
    def b_search(self, nums, target):
        l = 0
        r = len(nums) - 1
        
        res = -1
        while l<=r:
            mid = (l+r)//2
            
            if nums[mid] == target:
                res=mid
                break
            if nums[mid] < target:
                l = mid + 1
            if nums[mid] > target:
                r = mid - 1
        
        return res