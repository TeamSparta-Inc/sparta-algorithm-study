import sys

# sys.stdin = open('input.txt')

N = int(sys.stdin.readline())
cards = sorted(list(map(int, sys.stdin.readline().split())))
M = int(sys.stdin.readline())
checks = list(map(int, sys.stdin.readline().split()))

ans = list(0 for i in range(len(checks)))

cards.sort()

# 이분 탐색
for i, check in enumerate(checks):
    low, high = 0, len(cards) - 1
    while low <= high:
        mid = (low + high) // 2
        if cards[mid] == check:
            ans[i] = 1
            break
        elif cards[mid] < check:
            low = mid + 1
        elif cards[mid] > check:
            high = mid - 1

for i in ans:
    print(i, end=" ")
