# 4) მოცემულია სია celsius = [0, 25, 100, -10, 37]
# გადააქციეთ Celsius-ები Kelvin-ში map-ის გამოყენებით.

# Hint:ფორმულა Kelvin = Celsius + 273

celsius = [0, 25, 100, -10, 37]

K = list(map(lambda k: k + 273, celsius))
print(K)