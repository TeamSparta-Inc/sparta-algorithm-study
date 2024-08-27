# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:


class Solution:
    def guessNumber(self, n: int) -> int:
        pivot = n // 2
        left = 1
        right = n
        while True:
            res = guess(pivot)
            if res == 0:
                return pivot
            elif res > 0:
                left = pivot + 1
            else:
                right = pivot - 1
            pivot = (left + right) // 2
        