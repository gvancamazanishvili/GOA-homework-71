# 3) https://www.codewars.com/kata/643af0fa9fa6c406b47c5399/train/python

def quadrant(x, y):
    if x > 0 and y > 0:
        return 1
    elif x < 0 and y > 0:
        return 2
    elif x < 0 and y < 0:
        return 3
    else:
        return 4