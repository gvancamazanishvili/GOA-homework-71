# 6) 5 მომხმარებელს შემოატანინეთ სახელი input-ით, შემდეგ კი შეინახეთ usernames სიაში.
# გამოიყენეთ map, იმისთვის რომ თითოეულ სახელს წინ დაუწეროთ "Welcome". განახლებული შედეგი შეინახეთ სიაში სახელწოდებით greet_users.

name1 = input("Enter your name: ")
name2 = input("Enter your name: ")
name3 = input("Enter your name: ")
name4 = input("Enter your name: ")
name5 = input("Enter your name: ")

usernames = [name1, name2, name3, name4, name5]
greet = list(map(lambda x: "Welcome " + x, usernames))
print(greet)