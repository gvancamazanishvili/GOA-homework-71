# 10) დაწერეთ პროგრამა, რომელიც შეადარებს მომხმარენლის მიერ შემოტანილ ორ რიცხვს და დაბეჭდავს, რომელი უფრო მეტია ან ტოლია.

num1 = int(input("Enter your first number: "))
num2 = int(input("Enter your second number: "))

if num1 < num2:
    print("first number is less")
elif num1 > num2:
    print("first number is more")
else:
    print("they are equal")