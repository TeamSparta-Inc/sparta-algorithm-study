class Solution(object):
    def reverseVowels(self, s):
        vowels = {"a","e","i","o","u","A","E","I","O","U"}
        result = list(s)
        start = 0
        last = len(result) - 1
        while start < last:
            if result[start] in vowels and result[last] in vowels:
                result[start], result[last] = result[last], result[start]
                start += 1
                last -= 1
            else:
                if result[start] not in vowels:
                    start += 1
                if result[last] not in vowels:
                    last -= 1
        return "".join(result)