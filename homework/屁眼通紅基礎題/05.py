def grade_score(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'
    
gradeinput = input("請輸入一組成績(以逗號分開)：")
gradeinput = gradeinput.replace(" ", "").split(',')
grades = [int(x) for x in gradeinput if x.isdigit()]
if not grades:
    print("沒有有效的成績輸入")
else:
    for garde in grades:
        print(f"{garde} : {grade_score(garde)}")

