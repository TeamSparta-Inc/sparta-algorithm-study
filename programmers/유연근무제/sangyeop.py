def convert_to_minutes(time_value):
    hours = time_value // 100
    minutes = time_value % 100
    return hours * 60 + minutes

def is_weekend(day):
    return day in [6, 7]

def get_next_day(day):
    return 1 if day == 7 else day + 1

def solution(schedules, timelogs, startday):

    LATE_THRESHOLD = 10
    compliant_employees = 0
    
    for i in range(len(schedules)):
        current_day = startday
        schedule_in_minutes = convert_to_minutes(schedules[i])
        
        all_logs_valid = True
        for log_time in timelogs[i]:
            if is_weekend(current_day):
                current_day = get_next_day(current_day)
                continue
            
            actual_time_in_minutes = convert_to_minutes(log_time)
            
            if schedule_in_minutes + LATE_THRESHOLD < actual_time_in_minutes:
                all_logs_valid = False
                break
            
            current_day = get_next_day(current_day)
        
        if all_logs_valid:
            compliant_employees += 1
    
    return compliant_employees