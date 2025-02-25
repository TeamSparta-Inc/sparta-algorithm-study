class Solution:
    def removeStars(self, s: str) -> str:
        ans = s
        while '*' in ans:
            star_pos = ans.find('*')
            ans = ans[:star_pos - 1] + ans[star_pos + 1:]
        return ans