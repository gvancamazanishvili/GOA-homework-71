# 2)https://www.codewars.com/kata/52597aa56021e91c93000cb0 

def move_zeros(lst):
    for i in lst:
        if i == 0:
            lst.remove(i)
            lst.append(i)
    return lst