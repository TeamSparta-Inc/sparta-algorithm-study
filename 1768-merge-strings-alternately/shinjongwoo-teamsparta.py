class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        cur1, cur2 = 0, 0
        l1, l2 = len(word1), len(word2)

        res = ""
        while True:
            if cur1 < l1:
                res = res + word1[cur1]
                cur1 = cur1 + 1
            if cur2 < l2:
                res = res + word2[cur2]
                cur2 = cur2 + 1
            if (cur1+1 + cur2) > l1 + l2: 
                break
            
        return res