# 1) მომხმარებელს შემოატანინეთ თავისი სახელი და შეინახეთ ცვლადში, ასევე შემოატანინეთ მისი გვარი და ასაკი და f სტრინგის გამოყენებით დაბეჭდეთ მსგავსი წინადადება:

# "The user's name is სახელი. Her surname is გვარი and she is ასაკი years old.


name = input("Enter your name: ")
last_name = input("Enter your last name: ")
age = int(input("Enter your age: "))

print(F"The user's name is {name}, last name is {last_name} and she is {age} years old ")