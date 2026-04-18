# 2) https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python

def alphabet_position(text):
    return ' '.join(
        str(ord(char) - 96)
        for char in text.lower()
        if char.isalpha()
    )

