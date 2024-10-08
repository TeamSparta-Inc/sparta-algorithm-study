"""
제목: (1202) 보석 도둑
링크: https://www.acmicpc.net/problem/1202
유형: Greedy Algorithm
날짜: 2024-10-8
난이도: 4
"""
import heapq
import sys

sys.stdin = open("input.txt")

num_gems, num_bags = map(int, sys.stdin.readline().split())

bags = []
gems = []

for _ in range(num_gems):
    gem_weight, gem_value = map(int, sys.stdin.readline().split())
    gems.append((gem_weight, gem_value))

for _ in range(num_bags):
    bags.append(int(sys.stdin.readline()))

gems.sort(key=lambda x: x[0])  # 보석을 무게 순으로 오름차순 정렬
bags.sort()  # 가방도 무게 순으로 오름차순 정렬. 가장 작은 가방부터 담기 위해서

# print(f"{bags = }")
# print(f"{gems = }")

total_weight = 0
gem_index = 0
gem_list = []
for bag_weight in bags:
    while gem_index < num_gems and gems[gem_index][0] <= bag_weight:
        heapq.heappush(gem_list, -gems[gem_index][1])  # 가격 순으로 내림차순 정렬
        gem_index += 1

    if len(gem_list) > 0:  # 보석이 없을수도 있으니 IndexError 피하기 위해
        total_weight += -heapq.heappop(gem_list)

print(total_weight)
