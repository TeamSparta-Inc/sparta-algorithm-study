class Solution(object):
    def findChampion(self, n, edges):
        champions = [True for _ in range(n)]
        mat = [[0 for x in range(n)] for y in range(n)]

        for edge in edges:
            x, y = edge
            mat[x][y] = 1

        for row in mat:
            for i, elem in enumerate(row):
                if elem is 1:
                    champions[i]= False
        res = None
        for i, c in enumerate(champions):
            if c:
                if res is not None:
                    return -1
                res = i 
        return res
        # return champions[0] if len(champions) < 2 else -1
        