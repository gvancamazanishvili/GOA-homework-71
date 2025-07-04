# 3) შექმენით Number guess game:

# ცვლადში შეინახეთ სასურველი რიცხვი. მომხმარებელს Input-ის მეშვეობით შეეკითხეთ ეცადოს რიცხვის გამოცნობა, ვერ გამოცნობის შემთხვევა გამოუტანეთ "Try again" და იქამდე გამოუტანეთ Input ველი სანამ არ გამოიცნობს რიცხვს. წარმატებით გამოცნობის შემთხვევაში გამოუტანეთ "You guessed the number sucessfully!".

number = 19
num = int(input("guess my number: "))


while True:
    num = int(input("try again:"))

    if num == number:
        print("You guessed the number sucessfully!")
        break



