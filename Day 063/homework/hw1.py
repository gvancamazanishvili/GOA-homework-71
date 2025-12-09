# 1) https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/python

def distinct(seq):
    list = []
    for num in seq:
        if num not in list:
            list.append(num)

    return list