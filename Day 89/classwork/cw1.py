# 1) https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/python
# Codewars

# ეს kata ამოხსენით მინიმუმ 4 სხვადასხვა ვარიანტით


# 1
def swap_values(args): 
    first = args.pop(0)
    second = args.pop(0)
    
    args.insert(0, first)
    args.insert(0, second)


# 2
def swap_values(args): 
    return args.reverse()


# 3 
def swap_values(args):
    args[0], args[1] = args[1], args[0]
    return args


# 4
def swap_values(args):
    args[1], args[0] = args[0], args[1]
    return args
