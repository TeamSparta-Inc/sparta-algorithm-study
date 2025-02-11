class Data:
    def __init__(self, code, date, maximum, remain):
        self.code = code
        self.date = date
        self.maximum = maximum
        self.remain = remain

def solution(data, ext, val_ext, sort_by):
    data_list = []
    answer = []
    for row in data:
        data_list.append(Data(row[0], row[1], row[2], row[3]))
    
    for data in data_list:
        if ext == "code":
            if data.code <= val_ext:
                answer.append([data.code, data.date, data.maximum, data.remain])
        elif ext == "date":
            if data.date <= val_ext:
                answer.append([data.code, data.date, data.maximum, data.remain])
        elif ext == "maximum":
            if data.maximum <= val_ext:
                answer.append([data.code, data.date, data.maximum, data.remain])
        elif ext == "remain":
            if data.remain <= val_ext:
                answer.append([data.code, data.date, data.maximum, data.remain])
    
    if sort_by == "code":
        answer.sort(key=lambda x: x[0])
    elif sort_by == "date":
        answer.sort(key=lambda x: x[1])
    elif sort_by == "maximum":
        answer.sort(key=lambda x: x[2])
    elif sort_by == "remain":
        answer.sort(key=lambda x: x[3])
    
    return answer


solution(
    [[1, 20300104, 100, 80], [2, 20300804, 847, 37], [3, 20300401, 10, 8]], 
         "date", 
         20300501, 
         "remain")