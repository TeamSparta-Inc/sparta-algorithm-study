class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        num1 = 0
        num2 = 0
        for i in range(n):
            target_num = i + 1
            if target_num % m:
                num1 += target_num
            else:
                num2 += target_num
        return num1 - num2