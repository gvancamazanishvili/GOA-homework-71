# 4) დაწერეთ ფუნქცია, რომელიც მიიღებს ორ სიას და დააბრუნებს სიას, სადაც მხოლოდ საერთო ელემენტებია.

def same_numbers(list1, list2):
    new_list = []
    
    for num in list1:
        if num  in list1:
            new_list.append(num)
        elif num  in list2:
            new_list.append(num)
        else:
            None

    return new_list
        
print(same_numbers([2, 4], [2, 4, 7, 5]))