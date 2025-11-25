# 3) https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/python

def find_dup(arr):
    arr.sort()
    for i in range(1, len(arr)):
        if arr[i] == arr[ i - 1 ]:
            return i