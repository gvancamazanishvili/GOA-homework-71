# 2) foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]
# სიიდან დატოვე მხოლოდ ჯანსაღი საკვები —> H

foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]


healthy = list(filter(lambda x: (x[-1]).upper() == "H", foods))
print(healthy)