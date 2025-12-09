# 3) https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/python

def is_palindrome(s):
    if s.lower() == s[::-1].lower():
        return True
    else:
        return False