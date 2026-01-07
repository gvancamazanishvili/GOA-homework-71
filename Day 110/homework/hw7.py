# 7) გამოიყენეთ List comprehension და Lambda მოცემული პროგრამის დასაწერად:
# დაწერეთ ფუნქცია, რომელსაც გადასცემთ სტრინგების სიას. ფუნქციამ უნდა დააბრუნოს მხოლოდ ისეთი სტრინგები, რომელთა სიგრძეც 5-ს აღემატება.


strings = ["Gvanca", "Mazanishvili", "meate klasi", "ilovemusic", "10", "mama"]

longer_then_five = lambda strings: [x  for x in strings if len(x) > 5]
print(longer_then_five(strings))