# 1) https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

def move_zeros(lst):
    for i in lst:
        if i == 0:
            lst.remove(i)
            lst.append(i)
    return lst