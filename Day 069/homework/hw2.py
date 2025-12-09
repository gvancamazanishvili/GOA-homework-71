# 2) შექმენით ფუნქცია რომელსაც არგუმენტად ინტეჯერების სიას და მომხმარებლის პასუხს გადასცემთ. მომხმარებელს აარჩევინეთ ამ სიიდან ერთ-ერთი რიცხვი და დათვალეთ თუ რამდენჯერ მეორდება ეს რიცხვი სიაში.


def chose(number_list, user_choice):
    new_list = []
    if user_choice not in number_list:
        return None
    else:
        count =  number_list.count(user_choice)

    return count
    
    

print(chose( [1, 5, 3, 7, 5, 9, 5, 2, 5, 8, 5],  2))