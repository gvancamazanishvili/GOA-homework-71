# 4) შექმენით Vending Machine პროგრამა.
# შექმენით Vending Machine სია სადაც მინიმუმ 10 ცალ პროდუქტს დაამატებთ. მომხმარებელი უნდა ირჩევდეს პროდუქტის ინდექსს და შემდეგ თქვენ პროდუქტის დასახელება უნდა გამოუტანოთ ტერმინალში. (პირობაში დეტალები არ მიწერია, ასერომ ეცადეთ რაც შეიძლება დახვეწილი და მომხმარებლისთვის მოსახერხებელი პროგრამა შექმნათ)



products = ["ჩიფსი", "წყალი", "კარტოფილი", "მარშმელოუ", "შოკოლადი", "ჩხირები", "ნაყინი-გურჯაანის", "ნაყინი-თოლია", "ზეთი", "ალკოჰოლი"]


print("ჩიფსი", "წყალი", "კარტოფილი", "მარშმელოუ", "შოკოლადი", "ჩხირები", "ნაყინი-გურჯაანის", "ნაყინი-თოლია", "ზეთი", "ალკოჰოლი")





product_choice = int(input("Enter your number: "))

if product_choice == 0:
    print(products[0])
elif product_choice == 1:
    print(products[1])
elif product_choice == 2:
    print(products[2])
elif product_choice == 3:
    print(products[3])
elif product_choice == 4:
    print(products[4])
elif product_choice == 5:
    print(products[5])
elif product_choice == 6:
    print(products[6])
elif product_choice == 7:
    print(products[7])
elif product_choice == 8:
    print(products[8])
elif product_choice == 9:
    print(products[9])
elif product_choice == 10:
    print(products[10])
else:
    print("unavailble number")