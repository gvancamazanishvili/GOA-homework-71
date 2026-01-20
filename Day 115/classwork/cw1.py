# 1) https://www.codewars.com/kata/523f5d21c841566fde000009/train/python


# 1


def array_diff(a, b):
    res = []
    for i in a:
        if i not in b:
            res.append(i)
    return res


#  2
array_diff = lambda a, b:  [x for x in a if x not in b]

# 3

def array_diff(a, b):
    return [x for x in a if x not in b]