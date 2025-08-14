# 4) შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს სიას და დააბრუნებს ახალ სიას, სადაც მხოლოდ უნიკალური ელემენტები იქნება — ანუ თქვენი დავალებაა სია გაფილტროთ duplicate ელემენტებისგან.

def filter_duplicate(list):
    new_list = []
    for item in list:
        if item not in new_list:
            new_list.append(item)
    return new_list

listn = [5, 10, 15, 5, 10, 20, 25, 25, 30]

print(filter_duplicate(listn))