# 6) შექმენით Dictionary მომხმარებლის მონაცემებით.
# სცადეთ ისეთი key-ის მნიშვნელობის გამოტანა, რომელიც არ არსებობს. გამოიყენეთ Try/Except ბლოკი იმისთვის, რომ დაიჭიროთ KeyError.


info = {
    'name': "Gvanca",
    'surname' :'Mazanishvili',
    'age':  15,
    'grade': 10
}

try:
    print(info.keys('height'))
except:
    print('the key name does not exists')