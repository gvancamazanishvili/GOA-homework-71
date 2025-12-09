# 2) მოცემული გაქვთ ცვლადი 
# alphabet ="abcdefghijklmnopqrstuvwxyz"

# Slicing-ის საშუალებით გამოიტანეთ ჯერ სტრინგის პირველი ხუთი სიმბოლო, შემდეგ ბოლო 5 სიმბოლო. ბოლოს ორივე ცალ-ცალკე შემოაბრუნეთ, შეაერთეთ და დაბეჭდეთ.

alphabet = "abcdefghijklmnopqrstuvwxyz"
print(alphabet[:5])
print(alphabet [:5] [::-1])



print(alphabet[-6:-1])
print(alphabet[-6:-1] [::-1])

number = (alphabet [:5] [::-1])
number1 = (alphabet[-6:-1] [::-1])

print((alphabet [:5] [::-1]) + (alphabet[-6:-1] [::-1]))