# 3) https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/python

def find_multiples(integer, limit):
    lst = []
    for i in range(integer, limit + 1, integer):
        lst.append(i)
    return lst
