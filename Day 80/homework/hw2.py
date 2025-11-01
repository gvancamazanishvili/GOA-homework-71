# 2) https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/python

def flick_switch(lst):
    word = "flick"
    result = []
    switch = True
    
    for item in lst:
        if item == word:
            switch = not switch
        result.append(switch)
    
    return result