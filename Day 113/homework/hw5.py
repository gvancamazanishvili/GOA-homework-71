# 5) შექმენით რიცხვების სია. map-ის გამოყენებით შეინახეთ სიის თითოეული ელემენტი აყვანილი კვადრატში squared სიაში.


nums = [2, 4, 6, 8, 10]

square = list(map(lambda x: x ** 2, nums))
print(square)