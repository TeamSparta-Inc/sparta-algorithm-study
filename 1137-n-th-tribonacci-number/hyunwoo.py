class Solution:
    def tribonacci(self, n: int) -> int:
        arr = [0] * 40
        arr[0] = 0
        arr[1] = 1
        arr[2] = 1
        arr[3] = 2
        for i in range(4, n + 1):
            arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3]
        return arr[n]
