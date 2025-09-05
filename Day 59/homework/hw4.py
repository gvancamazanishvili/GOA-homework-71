# 4) https://www.codewars.com/kata/5866fc43395d9138a7000006/train/pytho\


def ensure_question(s):
    if s and s[-1] == "?":
        return s
    elif s == "":
        return "?"
    else:
        return s + "?"
