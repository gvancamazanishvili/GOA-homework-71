# 2) https://www.codewars.com/kata/541c8630095125aba6000c00/train/python


def digital_root(n):
    arr = [int(x) for x in str(n)]
    sum_arr = sum(arr)

    while sum_arr >= 10:
        arr = [int(x) for x in str(sum_arr)]
        sum_arr = sum(arr)

    return sum_arr
print(digital_root(234567))