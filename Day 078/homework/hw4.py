# 4) https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python

def open_or_senior(data):
    rslt = []
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            rslt.append("Senior")
        else:
            rslt.append("Open")
            
    return rslt
    
