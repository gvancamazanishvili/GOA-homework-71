# 3) https://www.codewars.com/kata/559ac78160f0be07c200005a/train/python

def name_shuffler(str_):
    parts = str_.split(" ")
    shuffled_parts = parts[::-1]
    return ' '.join(shuffled_parts)