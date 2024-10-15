class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        ans = []
        max_candy = max(candies)
        for i in range(len(candies)):
            ans.append(candies[i] + extraCandies >= max_candy)
        
        return ans