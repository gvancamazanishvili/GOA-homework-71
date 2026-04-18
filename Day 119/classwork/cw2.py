# 2) https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python

def high_and_low(numbers):
    list = numbers.split()
    nums = []
    for i in list:
        nums.append(int(i))
    return str(max(nums)) + " " + str(min(nums))