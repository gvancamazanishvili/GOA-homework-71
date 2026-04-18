# 4) https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/python


def missing_no(nums):
    n = 100
    expected_sum = n *( n + 1 ) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum