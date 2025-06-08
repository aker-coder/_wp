def average(nums):
    if not nums:
        return None
    return round(sum(nums) / len(nums), 3)
user_input = input("請輸入一組數字，以逗號分隔: ")
nums = [int(x) for x in user_input.split(',') if x.strip()!= '']
result = average(nums)
print(f"平均值是: {result}")
