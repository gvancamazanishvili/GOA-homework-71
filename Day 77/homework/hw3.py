# 3) დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს — ტექსტს და ასოს — და დააბრუნებს, რამდენჯერ გვხვდება ეს ასო ტექსტში ( გაითვალისწინეთ case სენსიტიურობა) 


def count(text, letter):
    if letter.islower():
        return text.count(letter)
    elif letter.isupper():
        return text.count(letter)
    


print(count("Banana", "a"))


