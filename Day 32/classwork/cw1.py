# 1) მომხმარებელს შემოატანინეთ 5 რიცხვი, რომლებსაც შემდეგ სიაში შენახავთ. Indexing-ს გამოყენებით გამოიტანეთ სიის ორი შუა ელენეტი.

num1 = int(input("Enter your number: "))
num2 = int(input("Enter your number: "))
num3 = int(input("Enter your number: "))
num4 = int(input("Enter your number: "))
num5 = int(input("Enter your number: "))

number = [num1, num2, num3, num4, num5]

print(number[1:3])