# 2) შექმენით სია და სცადეთ დაბეჭდოთ ელემენტი, რომელიც სიის range-ის საზღვარს გარეთ იქნება. except-ში დაბეჭდეთ: “Such index doesn’t exist”


nums = [2, 4, 6, 8, 0, 6, 4]

try:
    print(nums[9])
except:
    print("Such index doesn’t exist")