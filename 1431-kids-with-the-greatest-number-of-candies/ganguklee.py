class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        bar = max(candies) - extraCandies
        return map(lambda x: bool(x>=bar), candies)