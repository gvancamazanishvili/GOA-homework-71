# 4) გამოიყენეთ წინა დავალების Dict-ი, რომ გაანახევროთ 'Sweatshirt' key-ს მნიშვნელობა (რაოდენობა).


product_amount = {
    'Bag': 13,
    'Heels': 5,
    'Jeans': 29,
    'Sweatshirt': 14,
    'Sunglasses': 30
}

product_amount.update({'Sweatshirt':7})
print(product_amount.values())