# 2) https://www.codewars.com/kata/52f3149496de55aded000410/train/python

def sum_digits(number):
    n = abs(number)
    total = 0
    digits = list(str(n))
    for digits in digits:
        num = int(digits)
        total += num
    return total