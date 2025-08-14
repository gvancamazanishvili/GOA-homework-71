# 2) შექმენით ფუნქცია, რომელიც არგუმენტებად მიიღებს სტრინგს და სიმბოლოს. ფუნქციამ in keyword-ის გამოყენებით უნდა შეამოწმოს არის თუ არა მოცემული სიმბოლო სტრინგში. თუ არის — დააბრუნოს "Found", თუ არა — "Not found".

def filter(string, symbol):
    
    symbol = str(string)
    if symbol in string:
        return "Found"
    else:
        return "Not Found"
        

        
print(filter("gvanca", 12))