class Solution:
    
        
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
        def find_basket(fruit, baskets):
            for index in range(len(baskets)):
                if fruit <= baskets[index]:
                    baskets.pop(index)
                    return baskets
                
            return baskets
        for fruit in fruits:
            baskets = find_basket(fruit, baskets)
        return len(baskets)