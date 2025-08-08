# 3) დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს მომხმარებლის სახელს, გვარს და ასაკს. ფუნქციამ უნდა დააბრუნოს მომხმარებლის მონაცემები წინადადების სახით. (გამოიყენეთ f string-ი)





def data(name, surname, age):
    
    return (f"your name is {name},  your surname is {surname} and your age is {age}")

name = input ("Enter your name: ")
surname = input ("Enter your surname: ")
age = input ("Enter your age: ")

print(data(name, surname, age))