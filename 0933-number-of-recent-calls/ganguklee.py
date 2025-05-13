class RecentCounter:

    def __init__(self):
        self.c = 0
        self.q = []
        self.i = 0

    def ping(self, t: int) -> int:
        self.q.append(t)
        length = len(self.q)
        left = t-3000
        while self.q[self.i] < left:
            if self.i == length-1: return 0
            self.i += 1

        return length - self.i


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)