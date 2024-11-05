import sys
from collections import deque

sys.stdin = open('input.txt')
num_computers = int(sys.stdin.readline())
num_connections = int(sys.stdin.readline())
# print(num_computers, num_connections)

connections = [[] for _ in range(num_computers + 1)]
visited = [False] * (num_computers + 1)

for i in range(num_connections):
    a, b = map(int, sys.stdin.readline().split())
    connections[a].append(b)
    connections[b].append(a)

# print(connections)

queue = deque([1])
while queue:
    computer = queue.popleft()
    visited[computer] = True
    for neighbor in connections[computer]:
        if not visited[neighbor]:
            queue.append(neighbor)
print(sum(visited) - 1)
