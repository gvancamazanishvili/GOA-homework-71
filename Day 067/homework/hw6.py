# 6) შექმენით ფუნქცია max, რომელსაც არგუმენტად გადასცემთ რიცხვების სიას და პასუხად დააბრუნებს ამ რიცხვებიდან მაქსიმალურს.


def max(nums):
    new_list = sorted(nums)
    reverse_sorted = new_list[::-1]
    return reverse_sorted[0]

print(max([3, 6, 8 , 2]))