# 5) https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/python

def switch_it_up(number):
    if number == 0:
        return "Zero"
    elif number == 1:
        return "One"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return "Four"
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    elif number == 9:
        return "Nine"




def switch_it_up(number):
    in_words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    return in_words[number]



def switch_it_up(number):
    match number:
        case 0:
            return 'Zero'
        case 1:
            return 'One'
        case 2:
            return 'Two'
        case 3:
            return "Three"
        case 4:
            return "Four"
        case 5:
            return "Five"
        case 6:
            return "Six"
        case 7:
            return "Seven"
        case 8:
            return "Eight"
        case 9:
            return "Nine"