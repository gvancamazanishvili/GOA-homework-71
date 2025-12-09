# 3) შექმენით ფუნქცია double, რომელიც მიიღებს სიას და დააბრუნებს ახალ სიას, სადაც ყველა რიცხვი გაორმაგებულია.

def double(list):
    new_list = []
    for num in list:
        new_list.append(num * 2)
    return new_list
print(double([ 4]))