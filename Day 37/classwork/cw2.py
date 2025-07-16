# 2) ცვლადში შეინახეთ პაროლი. შემდეგ მომხმარებელს შემოატანინეთ პაროლი. იქამდე გამოუტანეთ "incorrect password" სანამ მომხმარებელი სწორად არ შემოიტანს პაროლს. სწორად შემოტანის შემთხვევაში გამოიტანეთ "correct password" (გამოიყენეთ while loop)


password = 12345

password_guess = int(input("Guess the password: "))

while password != password_guess:
    print( "incorrect password")
    password_guess = int(input("Guess the password: "))

print("correct password")