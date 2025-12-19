# 7) მომხმარებელს შემოატანინეთ რიცხვი
# თუ ის ტექსტს შეიყვანს, დაბეჭდეთ:
# "Please Enter numbers only."

num = input("Enter your number: ")


try:
    int_num = int(num)
    print(num)
except:
    print("Please Enter numbers only.")