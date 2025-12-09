# 1) https://www.codewars.com/kata/5601409514fc93442500010b/train/python

def better_than_average(class_points, your_points):
    avarage =  sum(class_points) / len(class_points)
    
    if avarage < your_points:
        return True
    else:
        return False

# 2) https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/python

def area_or_perimeter(l , w):
    if l == w:
            return l *  w
    else:
        return 2 * (l + w)
    

# 3) https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/python

def no_space(x):
    return x.replace(" ", "")


# 4) www.codewars.com/kata/54edbc7200b811e956000556/train/python

def count_sheeps(sheep):
    count = 0
    
    for i in sheep:
        if i == True:
            count += 1
    return count


# 5) https://www.codewars.com/kata/54edbc7200b811e956000556/train/python

def grader(score):
    if score > 1 or score < 0.6:
        return "F"
    elif score >= 0.9:
        return "A"
    elif score >= 0.8:
        return "B"
    elif score >= 0.7:
        return "C"
    elif score >= 0.6:
        return "D"