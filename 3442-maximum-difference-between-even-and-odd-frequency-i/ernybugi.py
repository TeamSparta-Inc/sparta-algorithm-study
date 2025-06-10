class Solution:
    def maxDifference(self, s: str) -> int:
        char_dict = {}
        for _char in s:
            if _char in char_dict:
                char_dict[_char] += 1
            else:
                char_dict[_char] = 1
        
        a1 = 100
        a2 = 0

        for _, val in char_dict.items():
            if val % 2 == 0 and a1 > val:
                a1 = val
            elif val % 2 == 1 and a2 < val:
                a2 = val

            
        print(a1)
        print(a2)
        return a2 - a1