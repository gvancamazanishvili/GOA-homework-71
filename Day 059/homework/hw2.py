# 2) https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/python

def pythagorean_triple(integers):
    a = integers[0]
    b = integers[1]    
    c = integers[2]
    return a**2 + b**2 == c**2 or a**2 + c**2 == b**2 or b**2 + c**2 == a**2