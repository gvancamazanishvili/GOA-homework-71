# 2) გამოიყენეთ update() მეთოდი, რომ წინა დავალების Dict-ში დაამატოთ ახალი key & value მნიშვნელობა 'Physics' : 'A'.
# შემდეგ კი ამოაგდეთ 'Biology' Dict-იდან.


student_grades ={
    'Math': 'A',
    'Biology': 'C',
    'Chemistry': 'B',
    'English': 'A',
}

student_grades.update({'Chemistry': 'A'})
student_grades.update({'Physics' : 'A'})
student_grades.pop('Biology')
print(student_grades)