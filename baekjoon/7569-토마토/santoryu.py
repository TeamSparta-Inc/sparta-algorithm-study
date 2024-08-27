"""
제목: (7569) 토마토
링크: https://www.acmicpc.net/problem/7569
유형: BFS
날짜: 2024-08-27
난이도: 2
메모: 입력을 어떻게 저장해둘지가 이 문제의 관건
input_map = [[[0, 0] for _ in range(x_length)] for _ in range(y_length)]
z_length가 2 이상일수 있을텐데 왜 이렇게 초기화해놓고 찾지도 못했을까...
"""
import sys
from collections import deque

sys.stdin = open("input.txt")

# 가로, 세로, 높이
x_length, y_length, z_length = map(int, sys.stdin.readline().split())

input_map = [[[0 for _ in range(z_length)] for _ in range(x_length)] for _ in range(y_length)]

queue = deque([])
for z in range(z_length):
    for y in range(y_length):
        input_row = list(map(int, sys.stdin.readline().split()))
        for x, value in enumerate(input_row):
            input_map[y][x][z] = value
            if value == 1:
                queue.append((y, x, z))

# for row in input_map:
#     print(row)

dx = [1, 0, 0, -1, 0, 0]
dy = [0, 1, 0, 0, -1, 0]
dz = [0, 0, 1, 0, 0, -1]

while queue:
    cur_y, cur_x, cur_z = queue.popleft()
    cur_value = input_map[cur_y][cur_x][cur_z]
    for i in range(6):
        new_y, new_x, new_z = cur_y + dy[i], cur_x + dx[i], cur_z + dz[i]
        if 0 <= new_y < y_length and 0 <= new_x < x_length and 0 <= new_z < z_length:
            next_value = input_map[new_y][new_x][new_z]
            if next_value == 0:
                input_map[new_y][new_x][new_z] = cur_value + 1
                queue.append((new_y, new_x, new_z))

max_value = 0
for y in input_map:
    for x in y:
        for z in x:
            # 안익은 토마토 있을 시 -1 return
            if z == 0:
                print(-1)
                exit()
            max_value = max(max_value, z)
# 모든 input 토마토가 다 익어있었을 시 0, 아니면 값 - 1
print(0 if max_value == 1 else max_value - 1)
