# 3) https://www.codewars.com/kata/52223df9e8f98c7aa7000062

def rot13(message):
    letters = "abcdefghijklmnopqrstuvwxyz" * 2
    letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    result = ''
    for i in message:
        if i in letters:
            index = letters.index(i)
            result += letters[index+13]
        elif i in letters_upper:
            index = letters_upper.index(i)
            result += letters_upper[index+13]
        else:
            result += i
    return result
    