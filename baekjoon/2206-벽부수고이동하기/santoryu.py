import sys
from collections import deque

# sys.stdin = open('input.txt')
# X, Y = map(int, sys.stdin.readline().split())
# nmap = [[int(x) for x in line.strip()] for line in sys.stdin]

X, Y = map(int, input().split())
nmap = [list(map(int, input())) for _ in range(X)]

distances = [[[0, 0] for _ in range(Y)] for _ in range(X)]
distances[0][0][0] = 1

# 예외 케이스
# 6 4
# 0000
# 1110
# 1000
# 0000
# 0111
# 0000

def bfs():
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    # x 좌표, y좌표, wallbreak(0은 아직 안뿌심, 1은 뿌심)
    queue = deque([(0, 0, 0)])
    while queue:
        cur_x, cur_y, wallbreak = queue.popleft()
        # print(f"cur_x: {cur_x}, cur_y: {cur_y}, wallbreak: {wallbreak}")
        if cur_x == X - 1 and cur_y == Y - 1:
            return distances[cur_x][cur_y][wallbreak]
        for i in range(4):
            new_x, new_y = cur_x + dx[i], cur_y + dy[i]

            if 0 <= new_x < X and 0 <= new_y < Y:
                if nmap[new_x][new_y] == 1 and wallbreak == 0:
                    distances[new_x][new_y][1] = distances[cur_x][cur_y][0] + 1
                    queue.append((new_x, new_y, 1))
                elif nmap[new_x][new_y] == 0 and distances[new_x][new_y][wallbreak] == 0:
                    distances[new_x][new_y][wallbreak] = distances[cur_x][cur_y][wallbreak] + 1
                    queue.append((new_x, new_y, wallbreak))

    return -1

print(bfs())
# for row in distances:
#     print(row)
