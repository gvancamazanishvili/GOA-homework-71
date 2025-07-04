# 6) შექმენით სია და შეამოწმეთ, არის თუ არა ის სიმეტრიული (მაგ: [1, 2, 3, 2, 1]).

#  Output: "Symmetric" ან "Not symmetric"

# hint: დაგჭირდებათ Slicing.

list = [1,2, 3, 3, 2, 1]

if list == list [::-1]:
    print("symmetric")
else:
    print("Not symmetric")