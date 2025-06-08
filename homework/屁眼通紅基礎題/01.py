def max_num(nums):
    if not nums:
        return None  # Handle empty list case
    max_value = nums[0]
    for num in nums:
        if num > max_value:
            max_value = num
    return max_value

user_input = input("請輸入一組數字，以逗號分隔: ")
nums = [int(x) for x in user_input.split(',' ) if x.strip()!= '']
result = max_num(nums)
print(f"最大值是: {result}")