# 2) დაწერეთ ფუნქცია, რომელიც მიიღებს მომხმარებლის სახელს. გვარსა და ასაკს. ფუნქციამ დააბრუნოს მომხმარებლის მონაცემები f სტრინგის გამოყენებით.




data = lambda name, surname, age: f"{name}, {surname}, {age}"

print(data("Gvanca", "Mazanishvili", 15))