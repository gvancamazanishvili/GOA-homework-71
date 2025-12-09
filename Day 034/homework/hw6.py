# 6) შექმენით სია, სადაც დაამატებთ მომხმარებლის მიერ შემოტანილ კვირის დღეებს. გადაუარეთ სიას Forloop-ით და ტერმინალში გამოიტანეთ მხოლოდ ლუწ ინდექსზე მდგომი ელემენტები.

day1 = input("enter your day of the week: ")
day2 = input("enter your day of the week: ")
day3 = input("enter your day of the week: ")
day4 = input("enter your day of the week: ")
day5 = input("enter your day of the week: ")
day6 = input("enter your day of the week: ")
day7 = input("enter your day of the week: ")


list = [day1, day2, day3, day4, day5, day6, day7]

for i in range (len(list)):
    if i % 2 == 0:
        print(f"{i}: {list[i]}")

