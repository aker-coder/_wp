def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

user_input = input("請輸入一個正整數: ")
if user_input.isdigit() and int(user_input) > 0:
    print(f"{user_input}是否為質數:",is_prime(int(user_input)))
else:
    print("請輸入正整數")