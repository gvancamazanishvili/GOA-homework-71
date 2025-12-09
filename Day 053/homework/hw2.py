# 2) https://www.codewars.com/kata/5966e33c4e686b508700002d/train/python

def sum_str(a, b):
    if a == "":
        a = "0"
    if b == "":
        b = "0"
        
    sum = int(a) + int(b)
    return str(sum)