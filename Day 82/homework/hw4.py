# 5) https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python

def reverse_words(text):
    words = text.split(' ')
    reversed_words = [word[::-1] for word in words]
    return ' '.join(reversed_words)