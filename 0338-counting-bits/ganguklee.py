import math

class Solution:
    def countBits(self, n: int) -> List[int]:
        if n == 0: return [0]

        s = math.floor(math.log(n, 2)) + 1
        ans = []
        for i in range(n+1):
            cnt = 0
            for j in range(s):
                if (1<<j) & i:
                    cnt += 1
            ans.append(cnt)

        return ans
            