# 5) https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/python


def angle(n):
    if n == 3:
        return 180
    else:
        return 180+(180*(n-3))
    

def angle(n):
    return (n-2)*180