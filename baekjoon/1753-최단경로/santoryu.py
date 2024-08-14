"""
제목: (1753) 최단경로
링크: https://www.acmicpc.net/problem/1753
유형: BFS/DFS 가 아닌 Dijkstra 알고리즘
    Dijkstra 알고리즘 : 다이나믹 프로그래밍을 활용한 대표적인 최단 경로 탐색 알고리즘
    heapq 모듈은 이진 트리(binary tree) 기반의 최소 힙(min heap) 자료구조
    heapq 에 튜플이 삽입될 경우엔, 튜플의 첫 번째 요소가 정렬의 기준. heapq.heappush(queue, (new_weight, next_node))
날짜: 2024-08-14
난이도: 2
메모:
"""
import sys
import heapq

sys.stdin = open("input.txt")
num_nodes, num_edges = map(int, sys.stdin.readline().split())
start_node = int(sys.stdin.readline())

distances = [[] for _ in range(num_nodes + 1)]
for _ in range(num_edges):
    source, destination, weight = map(int, sys.stdin.readline().split())
    distances[source].append((destination, weight))

INF = 1e9
weights = [INF] * (num_nodes + 1)
weights[start_node] = 0

queue = []
heapq.heappush(queue, (0, start_node))

while queue:
    cur_weight, cur_node = heapq.heappop(queue)
    for next_node, weight in distances[cur_node]:
        new_weight = cur_weight + weight
        if weights[next_node] > new_weight:
            weights[next_node] = new_weight
            heapq.heappush(queue, (new_weight, next_node))

for i in weights[1:]:
    print("INF" if i == INF else i)
