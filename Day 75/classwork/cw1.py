# 1) შექმენით manual_swapcase ფუნქცია დღეს ნასწავლი მეთოდების გამოყენებით.

def swap(str):
    if str.upper():
        return str.lower()
    else:
        return str.upper()

print(swap("GVANCA"))