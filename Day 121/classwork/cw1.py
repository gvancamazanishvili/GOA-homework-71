# 1) https://www.codewars.com/kata/587731fda577b3d1b0001196/train/python


def snake_to_pascal(s):
    word_array = s.split()
    pascal_case =[x.capitalize() for x in word_array]
    return "".join(pascal_case)


print(snake_to_pascal("gvanca mazanishvili"))