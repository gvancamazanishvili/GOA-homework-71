# 3) შექმენით ფუნქცია, რომელსაც გადასცემთ ინტეჯერების სიას. ფუნქციამ უნდა დააბრუნოს მეორე ყველაზე დიდი ელემენტი

def second_biggest(integers):
    return sorted(integers)[-2]
    

print(second_biggest([2, 6, 8, 90]))