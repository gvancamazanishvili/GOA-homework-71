# 2) შექმენით ფუნქცია check_age, რომელიც არგუმენტად მიიღებს მომხმარებლის ასაკს.
# თუ მომხმარებლის ასაკი მეტი ან ტოლი იქნება 18-ზე, ტერმინალში დაიბეჭდოს "Access Granted", წინააღმდეგ შემთხვევაში – "Access Denied".

def check_age (age):
    if age >= 18:
        return("Access Granted")
    else:
        return ("Access Denied")
    
print(check_age(12))
