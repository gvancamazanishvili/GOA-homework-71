# 4) https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/python

def sort_array(arr):
    odds = sorted((x for x in arr if x % 2 != 0), reverse = True)
    return [x if x % 2 == 0 else odds.pop() for x in arr]