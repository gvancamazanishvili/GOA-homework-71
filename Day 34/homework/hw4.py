# 4) შექმენით სია, სადაც დაამატებთ მომხმარებლის მიერ შემოტანილ სიტყვებს. გადაუარეთ სიას Forloop-ით და დაბეჭდეთ ტერმინალში.


word1 = input("Enter your word: ")
word2 = input("Enter your word: ")
word3 = input("Enter your word: ")
word4 = input("Enter your word: ")
word5 = input("Enter your word: ")


list = [word1, word2, word3, word4, word5]

for i in list:
    print(i)