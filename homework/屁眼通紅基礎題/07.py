def dict_to_string(d):
    return ', '.join([f"{k}:{v}" for k, v in d.items()])

user_input = input("請輸入字典內容，例如 a 1, b 2, c 3：")
d = {}
for item in user_input.split(','):
    if ' ' in item:
        k, v = item.split(' ', 1)
        d[k.strip()] = v.strip()
print(dict_to_string(d))

