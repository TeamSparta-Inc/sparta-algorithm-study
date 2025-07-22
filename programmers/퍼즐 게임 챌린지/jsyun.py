def solution(diffs, times, limit):
    calculated_times = [(0, times[0])] + [(sum(times[i-1: i+1]), times[i]) for i in range(1, len(times))]
    
    
    l = 0 # False
    r = max(diffs) # True
    
    # binsearch
    while l+1 < r:
        cur = (l + r) // 2 
        total_time = 0
        for calc_time, diff in zip(calculated_times, diffs):
            time = max(0, diff-cur) * calc_time[0] + calc_time[1]
            total_time += time
        if total_time <= limit:
            r = cur
        else:
            l = cur

    answer = r
    return answer
