# 1) https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/python

def odd_ball(arr):
    for i in arr:
        if i == arr.index("odd"):
            return True
    return False
