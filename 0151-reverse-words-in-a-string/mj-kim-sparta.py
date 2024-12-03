class Solution:
    def reverseWords(self, s: str) -> str:
        words = list(s.strip().split(" "))
        words.reverse()
        res = ""
        for word in words:
            if word == "": continue
            res = res + word + " "
        return res.strip()