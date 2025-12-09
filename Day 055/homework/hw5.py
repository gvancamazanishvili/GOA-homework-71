# 5) https://www.codewars.com/kata/5865918c6b569962950002a1/train/python

def str_count(strng, letter):
    if strng == "":
        return 0
    elif strng != "":
        return strng.count(letter)
    
    