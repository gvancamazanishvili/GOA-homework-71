# 2) https://www.codewars.com/kata/59811fd8a070625d4c000013/train/python



# 1
def integrate(coefficient, exponent):
    exponent = exponent + 1
    coefficient = coefficient // exponent
    return f"{str(coefficient)}x^{str(exponent)}"

# 2
def integrate(coefficient, exponent):
    return f"{str(coefficient //  (exponent + 1))}x^{str(exponent + 1)}"