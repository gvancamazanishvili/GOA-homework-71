# 2) შექმენით ფუნქცია, რომელსაც გადასცემთ ინტეჯერების სიას. ფუნქციამ უნდა დააბრუნოს მეორე ყველაზე მცირე ელემენტი.

def second_smallest(integers):
    return sorted(integers)[1]

print(second_smallest([3, 1, 4, 5, 6]))