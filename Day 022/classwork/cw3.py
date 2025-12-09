# 3) ცვლადში შეინახეთ თქვენი სიმაღლე. მომხმარებელსაც შეეკითხეთ მისი სიმაღლე.

# • თუ შენ უფრო მაღალი ხარ გამოიტანე: "I'm taller than you."

# • თუ მომხმარებელი უფრო მაღალია გამოიტანე: "You're taller than me"

# • თუ ტოლი სიმაღლეების ხართ, მაშინ დაბეჭდეთ "We have equal heights".


my_hight = 160

user_hight = float(input("Enter your hight: "))

if my_hight > user_hight:
    print("I'm taller than you.")
elif my_hight < user_hight:
    print("You're taller than me")
else:
    print("We have equal heights")