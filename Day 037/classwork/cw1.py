# 1) მომხმარებელს შემოატანინეთ მთელი რიცხვი და დაწერეთ პროგრამა, რომელიც ამოწმებს:

# • თუ რიცხვი დადებითია, დაბეჭდოს: "the number is positive"
# • თუ უარყოფითია, დაბეჭდოს: "the number is negative"
# • თუ ნულია, დაბეჭდოს: "the number is zero"

num = int(input("Enter your number: "))

if num > 0:
    print("the number is positive")
elif num < 0:
    print( "the number is negative")
else:
    print("the number is zero")