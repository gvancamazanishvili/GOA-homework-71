# 3) მომხმარებელს შემოატანინეთ თავისი სახელი, გვარი, ID ნომერი და ეროვნება. ეს ყოველივე შეინახეთ User_info ცვლადში. ჯერ მთლიანი სია დაბეჭდეთ, შემდეგ კი ინდექსინგის საშუალებით გამოიტანეთ სიის თითოეული ელემენტი ტერმინალში.

name = input("Enter your name: ")
last_name = input("Enter your last name: ")
ID = int(input("Enter your ID number: "))

User_info = [name, last_name, ID]

print (User_info)

print (User_info[0])
print (User_info[1])
print (User_info[2])

