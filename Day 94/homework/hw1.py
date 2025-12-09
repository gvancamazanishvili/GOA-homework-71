# 1) https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python

def is_square(n):    
    if n >= 0:
        return n**0.5 == int(n**0.5)
    else:
        return False
    