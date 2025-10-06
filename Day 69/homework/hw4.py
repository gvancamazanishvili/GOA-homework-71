# 4) შექმენით სია სახელად Fruits და ჩაამატეთ მასში ხილი. მომხმარებელს შემოატანინეთ ინდექსი და შემდეგ  ამ ინდექსზე მდგომი ელემენტი ამოშალე სიიდან. საბოლოოდ დაბეჭდე სიის საბოლოო ვერსია.



def fruits(fruit_list, index):
    if index not in range(len(fruit_list)):
        return None
    else:
        fruit_list.pop(index)
        return fruit_list
print(fruits(["Apple", "Lemon", "Watermelon", "Cacao", "Ananas"], 3))