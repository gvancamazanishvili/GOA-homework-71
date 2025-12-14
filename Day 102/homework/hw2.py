# 2) მოცემულია Dictionary:


# თქვენი დავალებაა update() მეთოდის გამოყენებით შეცვალოთ 'pass' key-ს მნიშვნელობა 'J1997'-ით, ხოლო 'creation day' key-ს მნიშვნელობა 26-ით. საბოლოოდ დაბეჭდეთ Dict-ის ყველა Item-ი.




user = {
    'username': 'John',
    'pass': 'J123',
    'creation year': 2016,
    'creation month': 10,
    'creation day': 28
}

user.update({'pass': 'J1997'})
user.update({'creation day': 26})

print(user.items())