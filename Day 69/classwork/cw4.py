# 4) დაწერეთ ფუნქცია, რომელიც დააბრუნებს True-ს თუ არგუმენტად გადაცემული სტრინგის პირველი და ბოლო ასო ერთმანეთს ემთხვევა


def similar(str):
    if str[-1] == str[0]:
        return True
    else:
        return False
    
print(similar("ana"))