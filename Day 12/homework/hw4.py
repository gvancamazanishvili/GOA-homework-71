# 4) მომხმარებელს შემოატანინეთ სიმაღლე სანტიმეტრებში. ცალკე ცვლადში კი შეინახეთ თქვენი სიმაღლე. დაადგინეთ მომხმარებელი არის თუ არა თქვენზე მაღალი.


hight = float(input(" Enter your hight in cm : "))
my_hight = 160


if hight > my_hight:
    print("you are taller then me")
elif hight < my_hight:
    print("you are shorter then me")
else:
    print("we are same hight")
