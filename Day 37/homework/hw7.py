# 7) დაწერეთ პროგრამა, სადაც მომხმარებელს შემოატანინებთ რიცხვებს მანამ, სანამ ის არ შეიყვანს 0-ს. ბოლოს დაბეჭდეთ ყველა მცდელობაზე შემოტანილი რიცხვების ჯამი.


number = 0
num = int(input("Enter your number: "))

while num != 0:
    print("incorrect")
    
    num = int(input("Enter your number: "))
    
    number += num
    
print(num)
print(number)