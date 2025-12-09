# 2) დაწერეთ პროგრამა, სადაც თავდაპირველად მომხმარებელს შემოატანინებთ ანგარიშის პაროლს, შემდეგ შეეკითხეთ რომ გაიმეოროს იქამდე, სანამ არ დაემთხვევა შეყვანილი პაროლი.


password = int(input("Enter your password: "))
confirm = int(input("confirm your password: "))

while password != confirm:
    print (int(input("try again: ")))
