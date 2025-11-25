# 1) https://www.codewars.com/kata/580a4734d6df748060000045/train/python

def is_sorted_and_how(arr):
    sorted_arr = sorted(arr)
    if sorted_arr == arr:
        return "yes, ascending"
    elif sorted_arr[::-1] == arr:
        return "yes, descending"
    else:
        return "no"