# 1) შექმენით ფუნქცია სახელად - filter_positives, რომელიც არგუმენტად მიიღებს სიას, თქვენი მიზანი იქნება არგუმენტად გადაცემული სიიდან მხოლოდ დადებითი რიცხვები დააბრუნოთ.


def filter_positives(list):
    positives = []
    for i in list:
        if i > 0:
            positives.append(i)
        
    return positives

print(filter_positives([-317, 1873, 13]))