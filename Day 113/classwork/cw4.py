# 4) minutes = [60, 120, 180, 240, 30] მოცემულია წუთები სიაში,map() ის გამოყენებით წუთები გადაიყვანეთ საათებში და დაპრინტეთ
# Hint: hours = minutes / 60


minutes = [60, 120, 180, 240, 30]

# hours = minutes / 60
hours = list(map(lambda x: x / 60, minutes))
print(hours)