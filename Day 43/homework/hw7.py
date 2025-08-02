# 7) შექმენით ფუნქცია სახელწოდებით double_values რომელიც არგუმენტად მიიღებს სიას და დააბრუნებს ახალ სიას, სადაც თითოეული ელემენტი გაორმაგებული იქნება.


def double_values (list):
    new_list = []
    for i in list:
        new_list.append(i * 2)
    return(new_list)