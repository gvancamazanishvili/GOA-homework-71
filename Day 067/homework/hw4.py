# 4) დაწერე ფუნქცია sum_of_digits, რომელიც მიიღებს რიცხვს და დააბრუნებს მის ციფრთა ჯამს (მაგ. 123 → 6).

def sum_of_digits(num):
    sum = 0
    for i in str(num):
        sum += int(i)
    return sum
    

print(sum_of_digits(123))