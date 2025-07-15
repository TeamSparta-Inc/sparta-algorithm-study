def solution(players, callings):
    # 선수 이름 → 현재 등수
    name_to_idx = {name: i for i, name in enumerate(players)}

    for name in callings:
        idx = name_to_idx[name]
        # 앞 선수와 자리 바꾸기
        players[idx], players[idx - 1] = players[idx - 1], players[idx]
        # 바뀐 선수들의 인덱스도 갱신
        name_to_idx[players[idx]] = idx
        name_to_idx[players[idx - 1]] = idx - 1

    return players