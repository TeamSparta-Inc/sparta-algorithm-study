"""
제목: (12865) 멀티탭 스케줄링
링크: https://www.acmicpc.net/problem/12865
유형: Greedy Algorithm
날짜: 2024-09-03
난이도: 3
메모: 
"""
import sys

sys.stdin = open("input.txt")
num_items, max_weight = map(int, sys.stdin.readline().split())
items = []
possible_combinations = {0: 0}  # 0:0으로 초기화 해놓는 혁기적인 아이디어 누가 생각해냈냐.... 안그랬으면 코드 지저분해질뻔
for _ in range(num_items):
    item_weight, item_value = map(int, sys.stdin.readline().split())
    items_temp = {}
    for specific_weight, specific_value in possible_combinations.items():
        new_weight = specific_weight + item_weight
        new_value = specific_value + item_value
        if new_weight <= max_weight:
            items_temp[new_weight] = max(new_value, possible_combinations.get(new_weight, 0))
    possible_combinations.update(items_temp)

print(max(possible_combinations.values()))

