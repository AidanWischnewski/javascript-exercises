def sum_all(start, end):
    if not isinstance(start, int) or not isinstance(end, int):
        return "ERROR"
    start,end = min(start,end), max(start,end)
    return sum([i for i in range(start, end+1)])


print(sum_all(1000,1005))