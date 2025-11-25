# 3) https://www.codewars.com/kata/58daa7617332e59593000006/train/python



def find_longest(arr):
    most_digs = 1
    for i in arr:
        if len(str(i)) > len(str(most_digs)):
            most_digs = i
    return most_digs

