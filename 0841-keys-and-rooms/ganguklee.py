class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        result = [False] * len(rooms)
        self.go(0, rooms, result)

        return all(result)

    def go(self, i, rooms, result):
        if result[i]:
            return

        result[i] = True
        keys = rooms[i]

        for k in keys:
            self.go(k, rooms, result)