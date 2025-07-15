def solution(players, m, k):
    answer = 0
    
    servers = [0] * len(players)
    
    for t, player in enumerate(players):
        servers_required = player // m
        if servers[t] < servers_required:
            shortage = servers_required - servers[t]
            servers[t:t+k] = [i + shortage for i in servers[t:t+k]]
            answer += shortage
    
    return answer
