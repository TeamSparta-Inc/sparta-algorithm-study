class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        highest = max(candies)
        result = []
        for i in candies:
            result.append(highest <= i + extraCandies)
        # print("result:", result)
        return result