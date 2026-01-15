# 8) 5 მომხმარებელს შემოატანინეთ სახელი input-ით, შემდეგ კი შეინახეთ usernames სიაში. 
# გამოიყენეთ filter, რომ filtered_users სიაში მხოლოდ შეინახოთ სახელები, რომელთა სიმბოლოების რაოდენობაც 5-ს აღემატება.


name1 = input("Enter your name: ")
name2 = input("Enter your name: ")
name3 = input("Enter your name: ")
name4 = input("Enter your name: ")
name5 = input("Enter your name: ")

usernames = [name1, name2, name3, name4, name5]

filtered_users = list(filter(lambda x: len(x) > 5, usernames))
print(filtered_users) 