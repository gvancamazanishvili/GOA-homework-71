# 1) შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს რიცხვების სიას და დააბრუნებს ყველა რიცხვის ნამრავლს

def nums(list):

    multiply = 1
    for i in list:
        multiply *= i
    return multiply

print(nums([218, 2183, 18]))
