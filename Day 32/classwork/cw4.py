# 4) მომხმარებელს შემოატანინეთ რამოდენიმე ჯანსაღი საკვები, შეინახეთ ცვლადში. შეაბრუნეთ და ბოლო 3 ელემენტი გამოიტანეთ ეკრანზე უარყოფითი Indexing-ის საშუალებით

food1 = input("Enter your healty food: ")
food2 = input("Enter your healty food: ")
food3 = input("Enter your healty food: ")
food4 = input("Enter your healty food: ")
food5 = input("Enter your healty food: ")

foods = [food1, food2, food3, food4, food5]

print(foods[::-1])
print(foods [-3::])