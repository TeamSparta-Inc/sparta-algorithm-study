class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        d = dict()

        for i, x in enumerate(arr):
            if d.get(x): d[x] += 1
            else: d[x] = 1

        s = set(d.values())

        return len(d) == len(s)
