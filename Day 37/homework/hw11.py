# 11) მომხმარებელს შემოატანინეთ ასაკი. გამოიყენეთ პირობითი განცხადებები რომ შექმნათ პროგრამა, სადაც - იმ შემთხვევაში თუ User იქნება 13 წელზე ნაკლენბი ასაკის გამოიტანთ 'You are a child'. თუ იქნება 13 წელზე მეტი, მაგრამ 18-ზე ნაკლები ასაკის დაუბეჭდეთ 'You are a teen'. თუ 18 წელზე მეტის იქნება დაუბეჭდეთ 'You are an adult.'

age = int(input("Enter your age: "))

if age < 13:
    print("You are a child")
elif age >= 13 and age < 18:
    print("You are a teen")
else:
    print("You are an adult")
