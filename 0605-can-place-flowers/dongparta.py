class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        flowerbed = [0] + flowerbed + [0]
        count = 0
        for i in range(1, len(flowerbed) - 1):
            if flowerbed[i-1:i+2] == [0, 0, 0]:
                flowerbed[i] = 1
                count += 1
            if count >= n:
                return True
        return False
        