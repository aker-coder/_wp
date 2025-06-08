def classify_even_odd(numbers):
    result = {
        "even": [sorted(num for num in numbers if num % 2 == 0)],
        "odd": [sorted(num for num in numbers if num % 2 != 0)]
    }
    return result

user_input = input("請輸入一組數字，以逗號分隔: ")
numbers = [int(x) for x in user_input.split(',') if x.strip()!= '']
result = classify_even_odd(set(numbers))
print(f"偶數: {result['even']}, 奇數: {result['odd']}")