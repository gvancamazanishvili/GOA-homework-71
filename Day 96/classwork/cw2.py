# 2) https://www.codewars.com/kata/52597aa56021e91c93000cb0

def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i