# 2) რას ეწოდება Tuple unpacking? მოიყვანეთ მინიმუმ 3 მაგალითი (Asterisk ოპერატორის გამნოყენების და გამოყენების გარეშეც)

# Tuple unpacking - ნიშნავს მისი თითოეული მნიშვნელობების ცალ-ცალკე სცვალდებში ან ასტერისკის შემთხვევაში მისი list-ად გადაქცევა


# გამოყენებით

# 1
Subjects = ("Math", 'History', 'Chemestry', 'Biology', "French", "Georgian", 'Physics')
sub1, sub2, sub3, sub4, *sub5 = Subjects

print(sub1)
print(sub2)
print(sub3)
print(sub4)
print(sub5)

# 2 
fruits = ('apple', 'mango', 'pinapple', 'watermelon')
fruit1, fruit2, *fruit3 = fruits
print(fruit1)
print(fruit2)
print(fruit3)

# 3

week = ('Monday', 'Tuesday', 'Wednesday', "Thursday", 'Friday', 'Saturday', 'Sunday')
week1, week2, *week3, week5, week6 = week

print(week1)
print(week2)
print(week3)
print(week5)
print(week6)

# .................................................................................................


# გამოყენების გარეშე

Subjects = ("Math", 'History', 'Chemestry', 'Biology', "French", "Georgian", 'Physics')
sub1, sub2, sub3, sub4, sub5, sub6, sub7 = Subjects

print(sub1)
print(sub2)
print(sub3)
print(sub4)
print(sub5)
print(sub6)
print(sub7)


# 2 
fruits = ('apple', 'mango', 'pinapple', 'watermelon')
fruit1, fruit2, fruit3, fruit4 = fruits
print(fruit1)
print(fruit2)
print(fruit3)
print(fruit4)

# 3

week = ('Monday', 'Tuesday', 'Wednesday', "Thursday", 'Friday', 'Saturday', 'Sunday')
week1, week2, week3, week4, week5, week6, week7 = week

print(week1)
print(week2)
print(week3)
print(week4)
print(week5)
print(week6)
print(week7)