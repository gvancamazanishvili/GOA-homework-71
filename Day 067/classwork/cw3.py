# შექმენი ისეთი ფუნქცია რომელიც გაფილტრავს სიას დუპლიკატებისგან


def filter(list):
    new_list = []
    for name in list:
        if name not in new_list:
            new_list.append(name)
    return new_list
    

print(filter(["Gvanca", 'giorgi', 'barbare', 'Gvanca']))