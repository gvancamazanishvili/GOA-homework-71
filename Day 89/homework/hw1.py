# 1) https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python

def get_count(string):
    count = 0
    for char in string:
        if char in 'aeiou':
            count += 1
    return count