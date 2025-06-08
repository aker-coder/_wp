def print_stars(n):
    for i in range(1, n + 1):
        print('*' * i)
user_input = input("請輸入一個正整數: ")
try:
    n = int(user_input)
    if n <= 0:
        raise ValueError("skibidi請輸入正整數")
    if n > 100:
        raise ValueError("skibidi請輸入小於等於100的數字")
    print_stars(n)
except ValueError as e:
    print(f"輸入錯誤: {e}")
