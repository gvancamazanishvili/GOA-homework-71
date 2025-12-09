# 2) დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს რიცხვების სიას და დააბრუნებს მხოლოდ ლუწი რიცხვების ჯამს.

def even(list):
    sum = 0
    for num in list:
        if num % 2 == 0:
            sum += num

    return sum

print(even([12, 4, 5]))

