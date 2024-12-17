class Solution:
    def getWater(self, l, r, height):
        return (r-l) * min(height[l], height[r]) 

    def maxArea(self, height: List[int]) -> int:
        l = nl = 0 
        r = nr = len(height) - 1
        result = self.getWater(l, r, height)

        while l < r:
            while l < nr and height[nr] <= height[r]:
                nr -= 1
            while nl < r and height[l] >= height[nl]:
                nl += 1

            wl = self.getWater(nl, r, height)
            wr = self.getWater(l, nr, height)

            if wl > result and wl >= wr:
                result = wl
                l = nl
            elif wr > result and wr >= wl:
                result = wr
                r = nr
            else:
                if height[l] < height[r]: l = nl
                else: r = nr

        return result
