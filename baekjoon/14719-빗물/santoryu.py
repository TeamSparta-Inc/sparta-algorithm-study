import sys

sys.stdin = open("input.txt")
X, Y = map(int, sys.stdin.readline().split())
blocks = list(map(int, sys.stdin.readline().split()))

answer = 0
for idx in range(1, len(blocks)-1):
    cur_block = blocks[idx]
    left_max_block = max(blocks[:idx])
    right_max_block = max(blocks[idx+1:])
    min_max_block = min(left_max_block, right_max_block)
    if cur_block < min_max_block:
        answer += min_max_block - cur_block
print(answer)
