class RecentCounter:
    def __init__(self):
        self.times = []

    def ping(self, t: int) -> int:
        self.times.append(t)
        left_range = t - 3000
        target_pos = 0
        for idx, time in enumerate(self.times):
            if time >= left_range:
                target_pos = idx
                break
        return len(self.times) - target_pos


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)
