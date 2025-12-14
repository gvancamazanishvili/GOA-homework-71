# 7) შექმენით სია, სადაც დაამატებთ თქვენს ფავორიტ მანქანის ბრენდებს. გამოიყენეთ List comprehension, იმისთვის რომ ახალ სიაში დაამატოთ მხოლოდ ისეთი ბრენდები, რომელთა სიმბოლოების რაოდენობა 5-ს არ აღემატება.


fav_cars = ["Porche", "Lamborghini", "Toyota", "Ferrari", "Jeep"]


not_more_then_5 = [i for i in fav_cars if len(i) <= 5]
print(not_more_then_5)
