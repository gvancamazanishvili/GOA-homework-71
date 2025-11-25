# https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python


def count_positives_sum_negatives(arr):
    if not arr:
        return []
    pos_count = 0  
    neg_sum = 0     
    for i in arr:
        if i > 0:
            pos_count += 1
        elif i < 0:
            neg_sum += i
    
    return [pos_count, neg_sum]