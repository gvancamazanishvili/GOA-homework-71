# 4) შექმენით Fruits სია 4 ელემენტით.
# მომხმარებელს შემოატანინეთ ახალი ხილი და ჩასვით ის სიის მეორე ინდექსზე.
# საბოლოოდ ტერმინალში გამოიტანეთ განახლებული სია.

fruits = ["apple", "watermelon", "banana"]

add = input("Enter which fruit you want to add: ")

fruits.insert(2, add)

print(fruits)