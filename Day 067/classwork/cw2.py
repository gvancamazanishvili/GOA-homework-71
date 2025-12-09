# დაწერე ფუნქცია, რომელიც მიიღებს string-ს და დააბრუნებს მხოლოდ ხმოვნებს


# 1)
def filter(string):
    vowel = ['a', 'e', 'i', 'o', 'u']
    word = ""
    for i in string:
        if i in vowel:
            word += i
    return word

print(filter("Gvanca"))


# 2)
def filter(str):
    vowel = 'aeiou'
    new_str = ''
    for i in str:
        if i in vowel:
            new_str += i
    return new_str

print(filter("Gvanca"))
