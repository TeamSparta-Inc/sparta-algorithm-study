"""
제목: (1516) 게임 개발
링크: https://www.acmicpc.net/problem/1516
유형: 위상 정렬
난이도: 3
메모:
"""
import sys
from collections import deque

sys.stdin = open("input.txt")
num_buildings = int(sys.stdin.readline())
buildings_cost = [0 for _ in range(num_buildings + 1)]
actual_cost = [0 for _ in range(num_buildings + 1)]
depends_on = [[] for _ in range(num_buildings + 1)]
depended_on = [[] for _ in range(num_buildings + 1)]
for building in range(1, num_buildings + 1):
    input_line = list(map(int, sys.stdin.readline().split()))
    buildings_cost[building] = input_line[0]
    for depends in input_line[1: -1]:
        depends_on[building].append(depends)
        depended_on[depends].append(building)

# print(f"{buildings_cost = }")
# print(f"{depends_on = }")
# print(f"{depended_on = }")

queue = deque([])
for idx, building in enumerate(depends_on):
    if idx != 0 and len(building) == 0:
        queue.append(idx)
        actual_cost[idx] = buildings_cost[idx]

while queue:
    cur_building = queue.popleft()
    cur_building_cost = actual_cost[cur_building]

    for depended_on_building in depended_on[cur_building]:
        depends_on[depended_on_building].remove(cur_building)
        actual_cost[depended_on_building] = max(buildings_cost[depended_on_building] + cur_building_cost,
                                                actual_cost[depended_on_building])
        if len(depends_on[depended_on_building]) == 0:
            queue.append((depended_on_building))

print(*actual_cost[1:], sep="\n")
