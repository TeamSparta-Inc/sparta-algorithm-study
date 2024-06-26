def solution(arr1, arr2):
    answer = [[] for _ in range(len(arr1))]
    for row_idx, row in enumerate(arr1):
        for len_idx in range(len(arr2[0])):
            total = 0
            for col_idx, item in enumerate(row):
                # print(f"{row_idx = }")
                # print(f"{col_idx = }")
                # print(f"{item = }")
                total += item * arr2[col_idx][len_idx]
            answer[row_idx].append(total)

    return answer
