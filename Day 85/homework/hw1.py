# 1) https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

def descending_order(num):
    num_str = str(num)
    sorted_digits = sorted(num_str, reverse=True)
    result_string = "".join(sorted_digits)
    return int(result_string)



def descending_order(num):
    res = []
    for i in str(num):
        res.append(i)
    res.sort()
    res =  res[::-1]
    return int("".join(res))