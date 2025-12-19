# 4) მომხმარებელს შემოატანინეთ ორი რიცხვი და სცადეთ მათი გაყოფა.
# თუ მეორე რიცხვი არის 0, დაიჭირეთ შეცდომა და დაბეჭდეთ:
# “Can’t divide a number by 0.”


num1 = int(input("Enter your first number: "))
num2 = int(input("Enter your second number: "))

try:
    num1 // num2
except:
    print("Can’t divide a number by 0")