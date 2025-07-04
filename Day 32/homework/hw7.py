# 7) შექმენი რიცხვების სია, სადაც დაამატებთ 8 რიცხვს. ცალკეულ ცვლადებში შეინახეთ ამ სიის საშუალო არითმეტიკული და სიის რიცხვების ჯამი. ბოლოს f string-ის გამოყენებით გამოიტანეთ მსგავსი წინადადებები:

# The aritchmetic mean of this list is: ...
# The sum of all numbers in this list is: ...

list = [2, 4, 5, 7, 8, 9]

tottal_sum = sum(list)


avarage = tottal_sum/len(list)

print(f"The aritchmetic mean of this list is: {avarage}" )

print(f"The sum of all numbers in this list is {tottal_sum}")