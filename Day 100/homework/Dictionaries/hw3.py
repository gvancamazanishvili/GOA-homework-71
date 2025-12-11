# 10) შექმენით Dict სახელწოდებით my_info. მასში ჩაწერეთ შემდეგი key კომპონენტები:
# name, surname, age, height, fav_color, fav_cars.
# თითოეულ key-ს მიუსადაგეთ თავისი value.
# ტერმინალში კი გამოიტანეთ მხოლოდ value-ები .get() მეთოდის საშუალებით.


my_info = {
    'name' : "Gvanca",
    'surname' : 'Mazanishvili',
    'age' : 15, 
    'height' : 165,
    'fav_color' : 'red', 
    "fav_cars" : "Porche: Panamera"
}

name = my_info.get('name')
surname = my_info.get('surname')
age = my_info.get('age')
height = my_info.get('height')
fav_color = my_info.get('fav_color')
fav_cars = my_info.get('fav_cars')

print(name)
print(surname)
print(age)
print(height)
print(fav_color)
print(fav_cars)