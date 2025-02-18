class Solution:
    vowels = 'aeiou'

    def maxVowels(self, s: str, k: int) -> int:
        result = 0

        for c in s[:k]:
            if c in self.vowels: result += 1

        cnt = result
        for i in range(len(s) - k):
            if s[i] in self.vowels: cnt -= 1
            if s[i+k] in self.vowels: cnt += 1
            result = max(cnt, result)

        return result

