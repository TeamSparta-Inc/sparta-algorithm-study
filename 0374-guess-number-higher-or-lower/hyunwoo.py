# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:


class Solution:
    def divide(self, start: int, end: int) -> bool:
        if guess(end) == 0:
            return end
        mid = (start + end) // 2
        res = guess(mid)
        if res == -1:
            return self.divide(start, mid)
        if res == 1:
            return self.divide(mid, end)
        if res == 0:
            return mid

    def guessNumber(self, n: int) -> int:
        return self.divide(1, n)
