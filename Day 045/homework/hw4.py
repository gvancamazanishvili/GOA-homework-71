# 4) დაწერეთ ფუნქცია სახელწოდებით odd_or_even. ფუნქციამ უნდა დააბრუნოს Even თუ არგუმენტად გადაცემული რიცხვი ლუწია, ხოლოდ Odd - თუ კენტი.

def add_or_even (num):
    if num % 2 == 0:
        return "Even"
    elif num % 2 != 0:
        return "Odd"

print(add_or_even(17))