class Solution:
    def tribonacci(self, n: int) -> int:
        ans = [0, 1, 1]
        if n in [0, 1, 2]:
            return ans[n]
        for i in range(n - 2):
            ans.append(ans[i] + ans[i + 1] + ans[i + 2])
        return ans[-1]