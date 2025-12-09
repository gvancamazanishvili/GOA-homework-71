# https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python


def xo(s):
    s_upper = s.upper()
    return s_upper.count("X") == s_upper.count("O")