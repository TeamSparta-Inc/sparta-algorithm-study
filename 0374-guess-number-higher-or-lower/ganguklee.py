# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        s = 1
        e = n
        p = (s+e) // 2

        while g := guess(p):
            if g > 0:
                s = p+1
            else:
                e = p

            p = (s+e) // 2

        return p
