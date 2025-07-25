# 2) შექმენით სია და შეინახეთ  5 სახელი. მომხმარებელს შემოატანინეთ სახელი და დაამატეთ ამ სიაში. ბოლოს, დაბეჭდეთ ამ სიის სიგრძე და სიის განახლებული ვერსია.


list = ["gvanca", "venera", "mzia", "barbare", "giorgi" ]

name = input("Enter your name: ")

list.append(name)

print(len(list))
print(list)