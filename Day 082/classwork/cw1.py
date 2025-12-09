# 1) https://www.codewars.com/kata/570597e258b58f6edc00230d/train/python

def array(string):
    if not string:
        return None 
    elements = string.split(",")
    if len(elements)<=2:
        return None
    middle_elements = elements[1:-1]
    return " ".join(middle_elements)