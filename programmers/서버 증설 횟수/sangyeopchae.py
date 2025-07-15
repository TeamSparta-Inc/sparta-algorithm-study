# 서버 증설 횟수
def solution(players, m, k):
    answer = 0
    servers = [0] * len(players)
    
    for i, player_count in enumerate(players):
        if player_count >= m:
            needed_servers = (player_count // m) - servers[i]
            if needed_servers > 0:
                # k 범위만큼 서버 증설
                for j in range(k):
                    if i + j < len(players):
                        servers[i + j] += needed_servers
                answer += needed_servers
    
    return answer

print(solution([0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5], 3, 5)) # 결과 7 나와야함