# 2) https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/python


def smash(words):
    res = ""
    for i in range(len(words)):
        if i != len(words) -1:
            res = res + words[i] + " "
        else:
                res = res + words[i]
    return res    