# 3) https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python
duplicate_count = lambda text: sum(1 for char in set(text.lower()) if text.lower().count(char) > 1)