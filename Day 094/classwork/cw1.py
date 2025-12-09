# 1) https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/python

def count_red_beads(n):
    if n < 2:
        return 0
    else:
        return 2 * (n - 1)