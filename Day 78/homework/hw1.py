# 1) https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/python

def _if(bool, func1, func2):
    if bool:
        return func1()
    else:
        return func2()