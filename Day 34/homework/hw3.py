# 3) შექმენით სია, სადაც მომხმარებელს შემოატანინებთ 5 რიცხვს (დაგჭირდებათ ცალკე ცვლადები). ცვლადებში შეინახეთ ამ სიის რიცხვების ჯამი და სიის  საშუალო არითმეტიკული. ბოლოს f string-ის გამოყენებით გამოიტანეთ მსგავსი წინადადებები:

# The aritchmetic mean of this list is: ...
# The sum of all numbers in this list is: ...



num1 = int(input("Enter your number: "))
num2 = int(input("Enter your number: "))
num3 = int(input("Enter your number: "))
num4 = int(input("Enter your number: "))
num5 = int(input("Enter your number: "))


list = [num1, num2, num3, num4, num5]


total_sum = sum(list)

avarage = total_sum/len(list)

print(f" The sum of all numbers in this list is: {avarage}")

print(f" The sum of all numbers in this list is: {total_sum}")