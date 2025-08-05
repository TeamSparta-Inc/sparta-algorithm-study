class Solution:
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
        N = len(baskets)
        occupied = [0] * N
        for fruit in fruits:
            for i, basket in enumerate(baskets):
                if occupied[i]: continue
                if fruit <= basket:
                    occupied[i] = 1
                    break

        return N - sum(occupied)