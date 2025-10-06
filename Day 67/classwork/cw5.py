# 2) შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს სტრინგს.
# ფუნქციამ უნდა დაითვალოს მოცემულ სტრინგში ხმოვნების რაოდენობა.

def count(str):
    vowel = 'aeiou'
    count = 0
    for i in str:
        if i in vowel:
            count += 1

    return count

print(count("gvanca"))