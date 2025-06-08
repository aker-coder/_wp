def count_chars(s):
    result = {}
    for char in s:
        result[char] = result.get(char, 0) + 1
    for char in sorted(result.keys()):
        print(f"'{char}' 出現 {result[char]} 次")
user_input = input("請輸入一段文字: ")
result = count_chars(user_input.replace(' ', ''))

