# 5) შექმენით სია [1, 2, 3, 4, 5].
# მომხმარებელს შეეკითხეთ ჯერ რომელ ინდექსზე სურს ელემენტის ჩანაცვლება, შემდეგ თუ რა ელემენტით უნდა ამ კონკრეტულ ინდექსზე მყოფი რიცხვის ჩანაცვლება და ამის მიხედვით შეცვალეთ სია. სიის თავდაპირველი და ბოლო სახეები გამოიტანეთ ტერმინალში.

list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

print(list)

change = int(input("which of the indexes of list do you wanna change? "))

change_list = int(input("enter the element number you wanna replace with: "))


print(list)

list[change] = change_list
print(list)

