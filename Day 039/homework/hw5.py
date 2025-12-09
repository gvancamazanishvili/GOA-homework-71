# 4) ცვლადში შეინახე შენი სახელი. მომხმარებელს შეეკითხე თავისი სახელი, იმ შემთხვევაში თუ თქვენი სახელები ემთხვევა დაბეჭდეთ "Our names are similar!", თუ არ ემთხვევა დაბეჭდეთ "We have different names". გაითვალისწინეთ, რომ მომხმარებელმა შეიძლება თქვენნაირი სახელი შემოიტანოს, თუმცა სახელის ასოები შესაძლოა იყოს სხვადასხვა შრიფტის ზომით, ამიტომ ამან თქვენ პროგრამაში შეფერხება არ უნდა გამოიწვიოს (გამოიყენეთ ნასწავლი სტრინგის მეთოდები)

my_name = "Gvanca"

name = input("Enter your name: ")

if my_name.lower() == name.lower():
    print("Our names are similar!")
elif my_name.upper() == name.upper():
    print("Our names are similar!")
elif my_name.capitalize == name.capitalize():
    print("Our names are similar!")
else:
    print("We have different names")