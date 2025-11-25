# 3) https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/python

def divisible_by(numbers, divisor):
    return [num for num in numbers if num % divisor == 0]



def divisible_by(numbers, divisor):
    res = []
    
    for num in numbers:
        if num % divisor == 0:
            res.append(num)
    return res

