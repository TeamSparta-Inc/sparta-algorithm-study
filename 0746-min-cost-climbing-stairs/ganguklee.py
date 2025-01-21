from functools import lru_cache

class Solution:
    cost: List[int]

    @lru_cache
    def go(self, i):
        if i < 2:
            return self.cost[i]
        
        return min(self.go(i-1), self.go(i-2)) + self.cost[i]

    def minCostClimbingStairs(self, cost: List[int]) -> int:
        self.cost = cost + [0]
        return self.go(len(cost))
        