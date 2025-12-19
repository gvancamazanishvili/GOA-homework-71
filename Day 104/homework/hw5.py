# 5) მომხმარებელს შეაყვანინეთ ორი რიცხვი
# • და სცადეთ მათი გაყოფა
# • დაიჭირეთ:
# • ValueError
# • ZeroDivisionError
# თითოეული Exception-ის შემთხვევაში განსხვავებული შეტყობინება დაბეჭდეთ.


num1 = input("Enter your first number: ")
num2 = input("Enter your second number: ")

try:
    int(num1) // int(num2)
except ZeroDivisionError:
    print("Can’t divide a number by 0")
except ValueError:
    print("Value is wrong")
