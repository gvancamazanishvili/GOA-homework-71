# 3) შექმენით ფუნქცია divide(a, b) რომელიც აბრუნებს გაყოფის შედეგს.
# გამოიყენეთ try/except, რომ ZeroDivisionError-მა არ გამოიწვიოს შეცდომა.

def devide (a, b):
    try:
        a // b
    except:
        ZeroDivisionError
        return "You can't devide any number to a 0"

print(devide(5, 0))