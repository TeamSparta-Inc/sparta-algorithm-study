class Solution:
    def getDescentPeriods(self, prices: List[int]) -> int:
        result = 0
        streak = 0
        last = None

        for i in prices:
            if last == i + 1:
                streak += 1
            else:
                streak = 1
            
            result += streak
            last = i
        
        return result