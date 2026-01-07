# 3) დაწერეთ ფუნქცია, რომელიც გამოითვლის რიცხვების სიის საშუალო არითმეტიკულს.


grade = lambda nums: sum(nums) // len(nums)
nums = [2, 4, 10, 9, 8, 7]

print(grade(nums))