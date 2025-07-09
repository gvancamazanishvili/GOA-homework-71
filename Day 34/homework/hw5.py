# 5) გაიხსენეთ გაკვეთილზე ახსნილი ახალი ოპერატორი (%). დაწერეთ პროგრამა, სადაც მომხმარებელმა უნდა შემოიტანოს ინტეჯერი რიცხვი. if-else ების გამოყენებით დაადგინეთ შემოტანილი რიცხვი ლუწი იქნება თუ კენტი. თუ რიცხვი ლუწია დაბეჭდეთ 'The number is even'. ხოლო თუ კენტია დაბეჭდეთ 'The number is odd'.


number = int(input("Enter your number: "))

if number % 2 and  number != 0:
    print("The number is odd")
else:
    print("The number is even")