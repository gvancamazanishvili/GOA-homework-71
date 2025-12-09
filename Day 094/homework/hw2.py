# 2) https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/python


def sum_of_minimums(numbers):
    sum = 0
    for arr in numbers:
        min_element = arr[0]
        for i in arr:
            if i < min_element:
                min_element = i
        sum += min_element
    return sum