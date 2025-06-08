def most_common(nums):
    count = {}
    for n in nums:
        count[n] = count.get(n, 0) + 1
    max_count = max(count.values())
    most = [k for k, v in count.items() if v == max_count]
    return most[0] if len(most) == 1 else most

user_input = input("請輸入一串數字，以逗號分隔: ")
print("出現最多的數字:", most_common([int(x) for x in user_input.split(',') if x.strip().isdigit()]))