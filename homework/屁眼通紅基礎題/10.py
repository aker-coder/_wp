def summary(data):
    for student in data:
        name = student.get('name', '未知')
        scores = [v for k, v in student.items() if k != 'name']
        total = sum(scores)
        avg = total / len(scores) if scores else 0
        print(f"{name} 總分: {total}，平均: {avg:.2f}")

students_input = input("請輸入學生資料 (格式: 名字, 分數1, 分數2, ...): ")
students = []
for student_data in students_input.split(';'):
    parts = student_data.split(',')
    if len(parts) > 1:
        name = parts[0].strip()
        scores = [int(score.strip()) for score in parts[1:] if score.strip().isdigit()]
        students.append({'name': name, **{f'score{i+1}': score for i, score in enumerate(scores)}})
summary(students)